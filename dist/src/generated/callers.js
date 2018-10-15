"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
var Server;
(function (Server) {
    class DummyManager {
    }
    Server.DummyManager = DummyManager;
})(Server = exports.Server || (exports.Server = {}));
var Call;
(function (Call) {
    let DummyManager;
    (function (DummyManager) {
        function addInts(bridgeClient, request) {
            return call_1.direct(bridgeClient, 10000, 'DummyManager/addInts', request, 'number');
        }
        DummyManager.addInts = addInts;
        function addIntsBad(bridgeClient, request) {
            return call_1.direct(bridgeClient, 1, 'DummyManager/addIntsBad', request, 'number');
        }
        DummyManager.addIntsBad = addIntsBad;
        function echoThrice(bridgeClient, request) {
            return call_1.streaming(bridgeClient, 10000, 'DummyManager/echoThrice', request, 'number');
        }
        DummyManager.echoThrice = echoThrice;
        function echoThriceBad(bridgeClient, request) {
            return call_1.streaming(bridgeClient, 1, 'DummyManager/echoThriceBad', request, 'number');
        }
        DummyManager.echoThriceBad = echoThriceBad;
        function concatTextAuth(bridgeClient, token, request) {
            return call_1.direct(bridgeClient, 10000, 'DummyManager/concatTextAuth', request, 'ConcatTextAuthResponse', token);
        }
        DummyManager.concatTextAuth = concatTextAuth;
        function echoThriceAuth(bridgeClient, token, request) {
            return call_1.streaming(bridgeClient, 10000, 'DummyManager/echoThriceAuth', request, 'string', token);
        }
        DummyManager.echoThriceAuth = echoThriceAuth;
    })(DummyManager = Call.DummyManager || (Call.DummyManager = {}));
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQUszQyxJQUFpQixNQUFNLENBRXRCO0FBRkQsV0FBaUIsTUFBTTtJQUNyQixNQUFhLFlBQVk7S0FBcUI7SUFBakMsbUJBQVksZUFBcUIsQ0FBQTtBQUNoRCxDQUFDLEVBRmdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUV0QjtBQUVELElBQWlCLElBQUksQ0FvRnBCO0FBcEZELFdBQWlCLElBQUk7SUFDbkIsSUFBaUIsWUFBWSxDQWtGNUI7SUFsRkQsV0FBaUIsWUFBWTtRQUMzQixTQUFnQixPQUFPLENBQ3JCLFlBQWlELEVBQ2pELE9BQXVCO1lBRXZCLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFYZSxvQkFBTyxVQVd0QixDQUFBO1FBRUQsU0FBZ0IsVUFBVSxDQUN4QixZQUFpRCxFQUNqRCxPQUF1QjtZQUV2QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osQ0FBQyxFQUNELHlCQUF5QixFQUN6QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWGUsdUJBQVUsYUFXekIsQ0FBQTtRQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBaUQsRUFDakQsT0FBZTtZQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osS0FBSyxFQUNMLHlCQUF5QixFQUN6QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWGUsdUJBQVUsYUFXekIsQ0FBQTtRQUVELFNBQWdCLGFBQWEsQ0FDM0IsWUFBaUQsRUFDakQsT0FBZTtZQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osQ0FBQyxFQUNELDRCQUE0QixFQUM1QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWGUsMEJBQWEsZ0JBVzVCLENBQUE7UUFFRCxTQUFnQixjQUFjLENBQzVCLFlBQWlELEVBQ2pELEtBQXdCLEVBQ3hCLE9BQThCO1lBRTlCLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsNkJBQTZCLEVBQzdCLE9BQU8sRUFDUCx3QkFBd0IsRUFDeEIsS0FBSyxDQUNOLENBQUE7UUFDSCxDQUFDO1FBYmUsMkJBQWMsaUJBYTdCLENBQUE7UUFFRCxTQUFnQixjQUFjLENBQzVCLFlBQWlELEVBQ2pELEtBQXdCLEVBQ3hCLE9BQWU7WUFFZixPQUFPLGdCQUFTLENBQ2QsWUFBWSxFQUNaLEtBQUssRUFDTCw2QkFBNkIsRUFDN0IsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLENBQ04sQ0FBQTtRQUNILENBQUM7UUFiZSwyQkFBYyxpQkFhN0IsQ0FBQTtJQUNILENBQUMsRUFsRmdCLFlBQVksR0FBWixpQkFBWSxLQUFaLGlCQUFZLFFBa0Y1QjtBQUNILENBQUMsRUFwRmdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQW9GcEIifQ==