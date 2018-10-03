"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
var Call;
(function (Call) {
    function addInts(bridgeClient, timeout, request) {
        return call_1.direct(bridgeClient, timeout, 'addInts', request, 'number');
    }
    Call.addInts = addInts;
    function echoThrice(bridgeClient, timeout, request) {
        return call_1.streaming(bridgeClient, timeout, 'echoThrice', request, 'number');
    }
    Call.echoThrice = echoThrice;
    function concatTextAuth(bridgeClient, timeout, token, request) {
        return call_1.direct(bridgeClient, timeout, 'concatTextAuth', request, 'ConcatTextAuthResponse', token);
    }
    Call.concatTextAuth = concatTextAuth;
    function echoThriceAuth(bridgeClient, timeout, token, request) {
        return call_1.streaming(bridgeClient, timeout, 'echoThriceAuth', request, 'string', token);
    }
    Call.echoThriceAuth = echoThriceAuth;
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQUszQyxJQUFpQixJQUFJLENBNERwQjtBQTVERCxXQUFpQixJQUFJO0lBQ25CLFNBQWdCLE9BQU8sQ0FDckIsWUFBNEIsRUFDNUIsT0FBMkIsRUFDM0IsT0FBdUI7UUFFdkIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO0lBQ0gsQ0FBQztJQVplLFlBQU8sVUFZdEIsQ0FBQTtJQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBNEIsRUFDNUIsT0FBMkIsRUFDM0IsT0FBZTtRQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osT0FBTyxFQUNQLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7SUFDSCxDQUFDO0lBWmUsZUFBVSxhQVl6QixDQUFBO0lBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUE0QixFQUM1QixPQUEyQixFQUMzQixLQUF3QixFQUN4QixPQUE4QjtRQUU5QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osT0FBTyxFQUNQLGdCQUFnQixFQUNoQixPQUFPLEVBQ1Asd0JBQXdCLEVBQ3hCLEtBQUssQ0FDTixDQUFBO0lBQ0gsQ0FBQztJQWRlLG1CQUFjLGlCQWM3QixDQUFBO0lBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUE0QixFQUM1QixPQUEyQixFQUMzQixLQUF3QixFQUN4QixPQUFlO1FBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxDQUNOLENBQUE7SUFDSCxDQUFDO0lBZGUsbUJBQWMsaUJBYzdCLENBQUE7QUFDSCxDQUFDLEVBNURnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUE0RHBCIn0=