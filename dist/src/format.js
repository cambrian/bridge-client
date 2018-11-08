"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
// Statically load schemas. See note below.
const schema_1 = require("./generated/schema");
exports.props = Object.getOwnPropertyNames(schema_1.Schemas.definitions);
const validator = new Ajv().addSchema(schema_1.Schemas);
const prefix = '#/definitions/';
function removeNull(obj) {
    if (typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            if (obj[key] && typeof obj[key] === 'object')
                removeNull(obj[key]);
            else if (obj[key] == null)
                delete obj[key];
        });
    }
    return obj;
}
;
function safeParse(value) {
    try {
        return removeNull(JSON.parse(value));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEwQjtBQUUxQiwyQ0FBMkM7QUFDM0MsK0NBQXVEO0FBRTFDLFFBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRXBFLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGdCQUFPLENBQUMsQ0FBQTtBQUM5QyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQTtBQUUvQixTQUFTLFVBQVUsQ0FBRSxHQUFRO0lBQzNCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVE7Z0JBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2lCQUM3RCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJO2dCQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFBQSxDQUFDO0FBRUYsU0FBZ0IsU0FBUyxDQUFFLEtBQVU7SUFDbkMsSUFBSTtRQUNGLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtLQUNyQztJQUFDLFdBQU07UUFBRSxPQUFPLFNBQVMsQ0FBQTtLQUFFO0FBQzlCLENBQUM7QUFKRCw4QkFJQztBQUVELGlHQUFpRztBQUNqRywwRkFBMEY7QUFDMUYsU0FBZ0IsUUFBUSxDQUFLLFNBQW9CLEVBQUUsS0FBVTtJQUMzRCxJQUFJO1FBQ0YsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUEsQ0FBQyx1QkFBdUI7UUFDbkUsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsS0FBSyxDQUFZLENBQUE7S0FDaEU7SUFBQyxXQUFNO1FBQUUsT0FBTyxLQUFLLENBQUE7S0FBRTtBQUMxQixDQUFDO0FBTEQsNEJBS0MifQ==