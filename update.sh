#!/bin/bash
./node_modules/.bin/typescript-json-schema schema.tsconfig.json "*" > src/schemas.json
node update.js > src/raw.ts
echo 'export const Schemas = {' >> src/raw.ts
sed '1d;$d' src/schemas.json >> src/raw.ts
sed 'h;s/[^ ].*//;s/    /  /g;G;s/\n *//' src/raw.ts > src/double.ts
sed "s/\"/'/g" src/double.ts > src/schemas.ts
rm src/schemas.json src/raw.ts
echo "JSON schema generated for the latest types."
echo "You may update the Version type now."
