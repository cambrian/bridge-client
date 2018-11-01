"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
const core_1 = require("@most/core");
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
            return call_1.direct(bridgeClient, 20000, 'DummyManager/addInts', request, 'number');
        }
        DummyManager.addInts = addInts;
        function addIntsBad(bridgeClient, request) {
            return call_1.direct(bridgeClient, 1, 'DummyManager/addIntsBad', request, 'number');
        }
        DummyManager.addIntsBad = addIntsBad;
        function echoThrice(bridgeClient, request) {
            return call_1.streaming(bridgeClient, 20000, 'DummyManager/echoThrice', request, 'number');
        }
        DummyManager.echoThrice = echoThrice;
        function echoThriceBad(bridgeClient, request) {
            return call_1.streaming(bridgeClient, 1, 'DummyManager/echoThriceBad', request, 'number');
        }
        DummyManager.echoThriceBad = echoThriceBad;
        function concatTextAuth(bridgeClient, token, request) {
            return call_1.direct(bridgeClient, 20000, 'DummyManager/concatTextAuth', request, 'ConcatTextAuthResponse', token);
        }
        DummyManager.concatTextAuth = concatTextAuth;
        function echoThriceAuth(bridgeClient, token, request) {
            return call_1.streaming(bridgeClient, 20000, 'DummyManager/echoThriceAuth', request, 'string', token);
        }
        DummyManager.echoThriceAuth = echoThriceAuth;
        function getVoid(bridgeClient) {
            return call_1.direct(bridgeClient, 20000, 'DummyManager/getVoid', [], 'Unit').then(_ => undefined);
        }
        DummyManager.getVoid = getVoid;
        function getVoidStream(bridgeClient) {
            return core_1.map(_ => undefined, call_1.streaming(bridgeClient, 20000, 'DummyManager/getVoidStream', [], 'Unit'));
        }
        DummyManager.getVoidStream = getVoidStream;
    })(DummyManager = Call.DummyManager || (Call.DummyManager = {}));
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQUkzQyxxQ0FBZ0M7QUFFaEMsSUFBaUIsTUFBTSxDQUV0QjtBQUZELFdBQWlCLE1BQU07SUFDckIsTUFBYSxZQUFZO0tBQXFCO0lBQWpDLG1CQUFZLGVBQXFCLENBQUE7QUFDaEQsQ0FBQyxFQUZnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFFdEI7QUFFRCxJQUFpQixJQUFJLENBNEdwQjtBQTVHRCxXQUFpQixJQUFJO0lBQ25CLElBQWlCLFlBQVksQ0EwRzVCO0lBMUdELFdBQWlCLFlBQVk7UUFDM0IsU0FBZ0IsT0FBTyxDQUNyQixZQUFpRCxFQUNqRCxPQUF1QjtZQUV2QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLHNCQUFzQixFQUN0QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWGUsb0JBQU8sVUFXdEIsQ0FBQTtRQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBaUQsRUFDakQsT0FBdUI7WUFFdkIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLENBQUMsRUFDRCx5QkFBeUIsRUFDekIsT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO1FBQ0gsQ0FBQztRQVhlLHVCQUFVLGFBV3pCLENBQUE7UUFFRCxTQUFnQixVQUFVLENBQ3hCLFlBQWlELEVBQ2pELE9BQWU7WUFFZixPQUFPLGdCQUFTLENBQ2QsWUFBWSxFQUNaLEtBQUssRUFDTCx5QkFBeUIsRUFDekIsT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO1FBQ0gsQ0FBQztRQVhlLHVCQUFVLGFBV3pCLENBQUE7UUFFRCxTQUFnQixhQUFhLENBQzNCLFlBQWlELEVBQ2pELE9BQWU7WUFFZixPQUFPLGdCQUFTLENBQ2QsWUFBWSxFQUNaLENBQUMsRUFDRCw0QkFBNEIsRUFDNUIsT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO1FBQ0gsQ0FBQztRQVhlLDBCQUFhLGdCQVc1QixDQUFBO1FBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUFpRCxFQUNqRCxLQUF3QixFQUN4QixPQUE4QjtZQUU5QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1Asd0JBQXdCLEVBQ3hCLEtBQUssQ0FDTixDQUFBO1FBQ0gsQ0FBQztRQWJlLDJCQUFjLGlCQWE3QixDQUFBO1FBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUFpRCxFQUNqRCxLQUF3QixFQUN4QixPQUFlO1lBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixLQUFLLEVBQ0wsNkJBQTZCLEVBQzdCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxDQUNOLENBQUE7UUFDSCxDQUFDO1FBYmUsMkJBQWMsaUJBYTdCLENBQUE7UUFFRCxTQUFnQixPQUFPLENBQ3JCLFlBQWlEO1lBRWpELE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsc0JBQXNCLEVBQ3RCLEVBQUUsRUFDRixNQUFNLENBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4QixDQUFDO1FBVmUsb0JBQU8sVUFVdEIsQ0FBQTtRQUVELFNBQWdCLGFBQWEsQ0FDM0IsWUFBaUQ7WUFFakQsT0FBTyxVQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZ0JBQVMsQ0FDbEMsWUFBWSxFQUNaLEtBQUssRUFDTCw0QkFBNEIsRUFDNUIsRUFBRSxFQUNGLE1BQU0sQ0FDUCxDQUFDLENBQUE7UUFDSixDQUFDO1FBVmUsMEJBQWEsZ0JBVTVCLENBQUE7SUFDSCxDQUFDLEVBMUdnQixZQUFZLEdBQVosaUJBQVksS0FBWixpQkFBWSxRQTBHNUI7QUFDSCxDQUFDLEVBNUdnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUE0R3BCIn0=