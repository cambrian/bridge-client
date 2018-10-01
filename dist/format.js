"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
// Statically load schemas. See note below.
const schema_1 = require("./generated/schema");
exports.props = Object.getOwnPropertyNames(schema_1.Schemas.definitions);
const validator = new Ajv().addSchema(schema_1.Schemas);
const prefix = '#/definitions/';
function safeParse(value) {
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return undefined;
    }
}
exports.safeParse = safeParse;
// Ideally the static parameters above would be moved into a higher-order function that returns a
// polymorphic validator, but TypeScript cannot currently do the necessary type inference.
function validate(schemaRef, value) {
    try {
        if (typeof value === schemaRef)
            return true; // For primitive types.
        return validator.validate(prefix + schemaRef, value);
    }
    catch (_a) {
        return false;
    }
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEwQjtBQUUxQiwyQ0FBMkM7QUFDM0MsK0NBQXVEO0FBRTFDLFFBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRXBFLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGdCQUFPLENBQUMsQ0FBQTtBQUM5QyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQTtBQUUvQixTQUFnQixTQUFTLENBQUUsS0FBVTtJQUNuQyxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3pCO0lBQUMsV0FBTTtRQUFFLE9BQU8sU0FBUyxDQUFBO0tBQUU7QUFDOUIsQ0FBQztBQUpELDhCQUlDO0FBRUQsaUdBQWlHO0FBQ2pHLDBGQUEwRjtBQUMxRixTQUFnQixRQUFRLENBQUssU0FBb0IsRUFBRSxLQUFVO0lBQzNELElBQUk7UUFDRixJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQSxDQUFDLHVCQUF1QjtRQUNuRSxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxLQUFLLENBQVksQ0FBQTtLQUNoRTtJQUFDLFdBQU07UUFBRSxPQUFPLEtBQUssQ0FBQTtLQUFFO0FBQzFCLENBQUM7QUFMRCw0QkFLQyJ9