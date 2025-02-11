#!/bin/bash
set -e
set -o pipefail

if [ -z "$1" ]
  then
    echo "types: output file not supplied"
    exit 1
fi

OUT_FILE=$1
TEMP_JSON=/tmp/schema.json

# Generates JSON schema from generated types. Does post-processing to make things clean.
./node_modules/.bin/typescript-json-schema schema.tsconfig.json "*" --required > $TEMP_JSON
PREPEND_TYPES=$(node types.js $TEMP_JSON)
PREPEND_EXPORT=$(echo 'export const Schemas = {')
NO_TRAILING=$(sed '1d;$d' $TEMP_JSON)
VALID_TABS=$(echo "$NO_TRAILING" | sed 'h;s/[^ ].*//;s/    /  /g;G;s/\n *//')
NO_DOUBLE=$(echo "$VALID_TABS" | sed "s/\"/'/g")

# Ugly sed hack using tr to temporarily replace newlines with a ! delimiter.
OBJECT_TO_ANY=$(echo "$NO_DOUBLE" | tr '\n' '!' | sed "s/{!      'type': 'object'!    }/\
{}/g" | tr '!' '\n')

echo "$PREPEND_TYPES" > $OUT_FILE
echo "$PREPEND_EXPORT" >> $OUT_FILE
echo "$OBJECT_TO_ANY" >> $OUT_FILE
echo "JSON schema generated for the latest types."
echo "You may update the Version type now."
