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
        function addInts(bridgeClient, timeout, request) {
            return call_1.direct(bridgeClient, timeout, 'DummyManager/addInts', request, 'number');
        }
        DummyManager.addInts = addInts;
        function echoThrice(bridgeClient, timeout, request) {
            return call_1.streaming(bridgeClient, timeout, 'DummyManager/echoThrice', request, 'number');
        }
        DummyManager.echoThrice = echoThrice;
        function concatTextAuth(bridgeClient, timeout, token, request) {
            return call_1.direct(bridgeClient, timeout, 'DummyManager/concatTextAuth', request, 'ConcatTextAuthResponse', token);
        }
        DummyManager.concatTextAuth = concatTextAuth;
        function echoThriceAuth(bridgeClient, timeout, token, request) {
            return call_1.streaming(bridgeClient, timeout, 'DummyManager/echoThriceAuth', request, 'string', token);
        }
        DummyManager.echoThriceAuth = echoThriceAuth;
    })(DummyManager = Call.DummyManager || (Call.DummyManager = {}));
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQUszQyxJQUFpQixNQUFNLENBRXRCO0FBRkQsV0FBaUIsTUFBTTtJQUNyQixNQUFhLFlBQVk7S0FBcUI7SUFBakMsbUJBQVksZUFBcUIsQ0FBQTtBQUNoRCxDQUFDLEVBRmdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUV0QjtBQUVELElBQWlCLElBQUksQ0E4RHBCO0FBOURELFdBQWlCLElBQUk7SUFDbkIsSUFBaUIsWUFBWSxDQTRENUI7SUE1REQsV0FBaUIsWUFBWTtRQUMzQixTQUFnQixPQUFPLENBQ3JCLFlBQWlELEVBQ2pELE9BQTJCLEVBQzNCLE9BQXVCO1lBRXZCLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixPQUFPLEVBQ1Asc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFaZSxvQkFBTyxVQVl0QixDQUFBO1FBRUQsU0FBZ0IsVUFBVSxDQUN4QixZQUFpRCxFQUNqRCxPQUEyQixFQUMzQixPQUFlO1lBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixPQUFPLEVBQ1AseUJBQXlCLEVBQ3pCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFaZSx1QkFBVSxhQVl6QixDQUFBO1FBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUFpRCxFQUNqRCxPQUEyQixFQUMzQixLQUF3QixFQUN4QixPQUE4QjtZQUU5QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osT0FBTyxFQUNQLDZCQUE2QixFQUM3QixPQUFPLEVBQ1Asd0JBQXdCLEVBQ3hCLEtBQUssQ0FDTixDQUFBO1FBQ0gsQ0FBQztRQWRlLDJCQUFjLGlCQWM3QixDQUFBO1FBRUQsU0FBZ0IsY0FBYyxDQUM1QixZQUFpRCxFQUNqRCxPQUEyQixFQUMzQixLQUF3QixFQUN4QixPQUFlO1lBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixPQUFPLEVBQ1AsNkJBQTZCLEVBQzdCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsS0FBSyxDQUNOLENBQUE7UUFDSCxDQUFDO1FBZGUsMkJBQWMsaUJBYzdCLENBQUE7SUFDSCxDQUFDLEVBNURnQixZQUFZLEdBQVosaUJBQVksS0FBWixpQkFBWSxRQTRENUI7QUFDSCxDQUFDLEVBOURnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUE4RHBCIn0=