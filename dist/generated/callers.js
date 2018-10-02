"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
var Call;
(function (Call) {
    async function addInts(bridgeClient, request) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(), call_1.makeDirectHandler, 'addInts', 'number', request);
    }
    Call.addInts = addInts;
    async function echoThrice(bridgeClient, request) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(), call_1.makeStreamingHandler, 'echoThrice', 'number', request);
    }
    Call.echoThrice = echoThrice;
    async function concatTextAuth(bridgeClient, request, token) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(token), call_1.makeDirectHandler, 'concatTextAuth', 'ConcatTextAuthResponse', request);
    }
    Call.concatTextAuth = concatTextAuth;
    async function echoThriceAuth(bridgeClient, request, token) {
        return call_1.call(bridgeClient, call_1.makeRequestOfAuth(token), call_1.makeStreamingHandler, 'echoThriceAuth', 'string', request);
    }
    Call.echoThriceAuth = echoThriceAuth;
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEwRjtBQVkxRixJQUFpQixJQUFJLENBMERwQjtBQTFERCxXQUFpQixJQUFJO0lBQ1osS0FBSyxVQUFVLE9BQU8sQ0FDM0IsWUFBNEIsRUFDNUIsT0FBdUI7UUFFdkIsT0FBTyxXQUFJLENBQ1QsWUFBWSxFQUNaLHdCQUFpQixFQUFFLEVBQ25CLHdCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQVpxQixZQUFPLFVBWTVCLENBQUE7SUFFTSxLQUFLLFVBQVUsVUFBVSxDQUM5QixZQUE0QixFQUM1QixPQUFlO1FBRWYsT0FBTyxXQUFJLENBQ1QsWUFBWSxFQUNaLHdCQUFpQixFQUFFLEVBQ25CLDJCQUFvQixFQUNwQixZQUFZLEVBQ1osUUFBUSxFQUNSLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQVpxQixlQUFVLGFBWS9CLENBQUE7SUFFTSxLQUFLLFVBQVUsY0FBYyxDQUNsQyxZQUE0QixFQUM1QixPQUE4QixFQUM5QixLQUF3QjtRQUV4QixPQUFPLFdBQUksQ0FDVCxZQUFZLEVBQ1osd0JBQWlCLENBQUMsS0FBSyxDQUFDLEVBQ3hCLHdCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQWJxQixtQkFBYyxpQkFhbkMsQ0FBQTtJQUVNLEtBQUssVUFBVSxjQUFjLENBQ2xDLFlBQTRCLEVBQzVCLE9BQWUsRUFDZixLQUF3QjtRQUV4QixPQUFPLFdBQUksQ0FDVCxZQUFZLEVBQ1osd0JBQWlCLENBQUMsS0FBSyxDQUFDLEVBQ3hCLDJCQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLE9BQU8sQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQWJxQixtQkFBYyxpQkFhbkMsQ0FBQTtBQUNILENBQUMsRUExRGdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQTBEcEIifQ==