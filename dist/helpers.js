"use strict";
// Load nameof from ts-nameof using the Transformers API.
/// <reference path="../node_modules/ts-nameof/ts-nameof.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
// Statically load schemas. See note below.
const schemas = require('./schemas.json');
const validator = new Ajv().addSchema(schemas);
const prefix = '#/definitions/';
// Ideally the static parameters above would be moved into a higher-order function that returns a
// polymorphic validator, but TypeScript cannot currently do the necessary type inference.
function validate(value) {
    try {
        return validator.validate(prefix + "T", value);
    }
    catch (_a) {
        return false;
    }
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7QUFDekQsaUVBQWlFOztBQUVqRSwyQkFBMEI7QUFFMUIsMkNBQTJDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3pDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzlDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFBO0FBRS9CLGlHQUFpRztBQUNqRywwRkFBMEY7QUFDMUYsU0FBZ0IsUUFBUSxDQUFLLEtBQVU7SUFDckMsSUFBSTtRQUNGLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE1BQWMsRUFBRSxLQUFLLENBQVksQ0FBQTtLQUNsRTtJQUFDLFdBQU07UUFBRSxPQUFPLEtBQUssQ0FBQTtLQUFFO0FBQzFCLENBQUM7QUFKRCw0QkFJQyJ9