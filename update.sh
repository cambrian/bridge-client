#!/bin/bash
./node_modules/.bin/typescript-json-schema schema.tsconfig.json "*" > src/schema.json
echo "JSON schema generated for the latest types."
echo "You may update the Version type now."
