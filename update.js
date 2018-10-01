const props = Object.getOwnPropertyNames(require('./src/schemas.json').definitions)
const quoted = props.map(prop => '\'' + prop + '\'')
console.log('export type SchemaRefs = ' + quoted.join('\n  | '))
