#!/usr/bin/env node
if (process.argv.length < 3) {
  console.error('types: schema file not supplied')
  process.exit(1)
}

let schemas;
try {
  schemas = require(process.argv[2])
} catch {
  console.error('types: schema file not found')
  process.exit(2)
}

if (typeof schemas !== 'object' || !schemas.definitions) {
  console.error('types: malformed schema')
  process.exit(3)
}

const props = Object.getOwnPropertyNames(schemas.definitions)
const propsAll = props.concat(['string', 'number', 'boolean', 'symbol']) // Add primitive types.
const quoted = propsAll.map(prop => '\'' + prop + '\'')
console.log('export type SchemaRef = ' + quoted.join('\n  | '))
