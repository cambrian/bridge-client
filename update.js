#!/usr/bin/env node
if (process.argv.length < 3) process.exit(1)
const props = Object.getOwnPropertyNames(require(process.argv[2]).definitions)
const propsAll = props.concat(['string', 'number', 'boolean', 'symbol']) // Add primitive types.
const quoted = propsAll.map(prop => '\'' + prop + '\'')
console.log('export type SchemaRefs = ' + quoted.join('\n  | '))
