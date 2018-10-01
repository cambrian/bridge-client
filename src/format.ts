import * as Ajv from 'ajv'

// Statically load schemas. See note below.
import { SchemaRef, Schemas } from './generated/schema'

export const props = Object.getOwnPropertyNames(Schemas.definitions)

const validator = new Ajv().addSchema(Schemas)
const prefix = '#/definitions/'

export function safeParse (value: any): any {
  try {
    return JSON.parse(value)
  } catch { return undefined }
}

// Ideally the static parameters above would be moved into a higher-order function that returns a
// polymorphic validator, but TypeScript cannot currently do the necessary type inference.
export function validate<T> (schemaRef: SchemaRef, value: any): value is T {
  try {
    if (typeof value === schemaRef) return true // For primitive types.
    return validator.validate(prefix + schemaRef, value) as boolean
  } catch { return false }
}
