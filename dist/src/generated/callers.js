"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
var Call;
(function (Call) {
    function addInts(bridgeClient, request) {
        return call_1.direct(bridgeClient, 'addInts', request, 'number');
    }
    Call.addInts = addInts;
    function echoThrice(bridgeClient, request) {
        return call_1.streaming(bridgeClient, 'echoThrice', request, 'number');
    }
    Call.echoThrice = echoThrice;
    function concatTextAuth(bridgeClient, request, token) {
        return call_1.direct(bridgeClient, 'concatTextAuth', request, 'ConcatTextAuthResponse', token);
    }
    Call.concatTextAuth = concatTextAuth;
    function echoThriceAuth(bridgeClient, request, token) {
        return call_1.streaming(bridgeClient, 'echoThriceAuth', request, 'string', token);
    }
    Call.echoThriceAuth = echoThriceAuth;
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQUszQyxJQUFpQixJQUFJLENBb0RwQjtBQXBERCxXQUFpQixJQUFJO0lBQ25CLFNBQWdCLE9BQU8sQ0FDckIsWUFBNEIsRUFDNUIsT0FBdUI7UUFFdkIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7SUFDSCxDQUFDO0lBVmUsWUFBTyxVQVV0QixDQUFBO0lBRUQsU0FBZ0IsVUFBVSxDQUN4QixZQUE0QixFQUM1QixPQUFlO1FBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixZQUFZLEVBQ1osT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO0lBQ0gsQ0FBQztJQVZlLGVBQVUsYUFVekIsQ0FBQTtJQUVELFNBQWdCLGNBQWMsQ0FDNUIsWUFBNEIsRUFDNUIsT0FBOEIsRUFDOUIsS0FBd0I7UUFFeEIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixPQUFPLEVBQ1Asd0JBQXdCLEVBQ3hCLEtBQUssQ0FDTixDQUFBO0lBQ0gsQ0FBQztJQVplLG1CQUFjLGlCQVk3QixDQUFBO0lBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUE0QixFQUM1QixPQUFlLEVBQ2YsS0FBd0I7UUFFeEIsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLENBQ04sQ0FBQTtJQUNILENBQUM7SUFaZSxtQkFBYyxpQkFZN0IsQ0FBQTtBQUNILENBQUMsRUFwRGdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQW9EcEIifQ==