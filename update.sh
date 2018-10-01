#!/bin/bash
TEMP_JSON=/tmp/schemas.json
# Generates JSON schema from generated types. Does post-processing to make things clean.
./node_modules/.bin/typescript-json-schema schema.tsconfig.json "*" > $TEMP_JSON
PREPEND_TYPES=$(node update.js $TEMP_JSON)
PREPEND_EXPORT=$(echo 'export const Schemas = {')
NO_TRAILING=$(sed '1d;$d' $TEMP_JSON)
VALID_TABS=$(echo "$NO_TRAILING" | sed 'h;s/[^ ].*//;s/    /  /g;G;s/\n *//')
NO_DOUBLE=$(echo "$VALID_TABS" | sed "s/\"/'/g")
echo "$PREPEND_TYPES" > src/schemas.ts
echo "$PREPEND_EXPORT" >> src/schemas.ts
echo "$NO_DOUBLE" >> src/schemas.ts
echo "JSON schema generated for the latest types."
echo "You may update the Version type now."
