"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
// Statically load schemas. See note below.
const schemas_1 = require("./schemas");
exports.props = Object.getOwnPropertyNames(schemas_1.Schemas.definitions);
const validator = new Ajv().addSchema(schemas_1.Schemas);
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
function validate(schema, value) {
    try {
        if (typeof value === schema)
            return true; // For primitive types.
        return validator.validate(prefix + schema, value);
    }
    catch (_a) {
        return false;
    }
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTBCO0FBRTFCLDJDQUEyQztBQUMzQyx1Q0FBK0M7QUFFbEMsUUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxDQUFBO0FBQzlDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFBO0FBRS9CLFNBQWdCLFNBQVMsQ0FBRSxLQUFVO0lBQ25DLElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDekI7SUFBQyxXQUFNO1FBQUUsT0FBTyxTQUFTLENBQUE7S0FBRTtBQUM5QixDQUFDO0FBSkQsOEJBSUM7QUFFRCxpR0FBaUc7QUFDakcsMEZBQTBGO0FBQzFGLFNBQWdCLFFBQVEsQ0FBSyxNQUFrQixFQUFFLEtBQVU7SUFDekQsSUFBSTtRQUNGLElBQUksT0FBTyxLQUFLLEtBQUssTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFBLENBQUMsdUJBQXVCO1FBQ2hFLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBWSxDQUFBO0tBQzdEO0lBQUMsV0FBTTtRQUFFLE9BQU8sS0FBSyxDQUFBO0tBQUU7QUFDMUIsQ0FBQztBQUxELDRCQUtDIn0=