"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
var Call;
(function (Call) {
    function addInts(bridgeClient, request) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(), call_1.makeDirectHandler, 'addInts', 'number', request);
    }
    Call.addInts = addInts;
    function echoThrice(bridgeClient, request) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(), call_1.makeStreamingHandler, 'echoThrice', 'number', request);
    }
    Call.echoThrice = echoThrice;
    function concatTextAuth(bridgeClient, request, token) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(token), call_1.makeDirectHandler, 'concatTextAuth', 'ConcatTextAuthResponse', request);
    }
    Call.concatTextAuth = concatTextAuth;
    function echoThriceAuth(bridgeClient, request, token) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(token), call_1.makeStreamingHandler, 'echoThriceAuth', 'string', request);
    }
    Call.echoThriceAuth = echoThriceAuth;
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEwRjtBQVkxRixJQUFpQixJQUFJLENBMERwQjtBQTFERCxXQUFpQixJQUFJO0lBQ25CLFNBQWdCLE9BQU8sQ0FDckIsWUFBNEIsRUFDNUIsT0FBdUI7UUFFdkIsT0FBTyxXQUFJLENBQ1QsWUFBWSxFQUNaLHdCQUFpQixFQUFFLEVBQ25CLHdCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQVplLFlBQU8sVUFZdEIsQ0FBQTtJQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBNEIsRUFDNUIsT0FBZTtRQUVmLE9BQU8sV0FBSSxDQUNULFlBQVksRUFDWix3QkFBaUIsRUFBRSxFQUNuQiwyQkFBb0IsRUFDcEIsWUFBWSxFQUNaLFFBQVEsRUFDUixPQUFPLENBQ1IsQ0FBQTtJQUNILENBQUM7SUFaZSxlQUFVLGFBWXpCLENBQUE7SUFFRCxTQUFnQixjQUFjLENBQzVCLFlBQTRCLEVBQzVCLE9BQThCLEVBQzlCLEtBQXdCO1FBRXhCLE9BQU8sV0FBSSxDQUNULFlBQVksRUFDWix3QkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFDeEIsd0JBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsT0FBTyxDQUNSLENBQUE7SUFDSCxDQUFDO0lBYmUsbUJBQWMsaUJBYTdCLENBQUE7SUFFRCxTQUFnQixjQUFjLENBQzVCLFlBQTRCLEVBQzVCLE9BQWUsRUFDZixLQUF3QjtRQUV4QixPQUFPLFdBQUksQ0FDVCxZQUFZLEVBQ1osd0JBQWlCLENBQUMsS0FBSyxDQUFDLEVBQ3hCLDJCQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQWJlLG1CQUFjLGlCQWE3QixDQUFBO0FBQ0gsQ0FBQyxFQTFEZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBMERwQiJ9