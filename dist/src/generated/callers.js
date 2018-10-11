"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUEyQztBQVMzQyxJQUFpQixJQUFJLENBOERwQjtBQTlERCxXQUFpQixJQUFJO0lBQ25CLElBQWlCLFlBQVksQ0E0RDVCO0lBNURELFdBQWlCLFlBQVk7UUFDM0IsU0FBZ0IsT0FBTyxDQUNyQixZQUFpRCxFQUNqRCxPQUEyQixFQUMzQixPQUF1QjtZQUV2QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osT0FBTyxFQUNQLHNCQUFzQixFQUN0QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWmUsb0JBQU8sVUFZdEIsQ0FBQTtRQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBaUQsRUFDakQsT0FBMkIsRUFDM0IsT0FBZTtZQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osT0FBTyxFQUNQLHlCQUF5QixFQUN6QixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7UUFDSCxDQUFDO1FBWmUsdUJBQVUsYUFZekIsQ0FBQTtRQUVELFNBQWdCLGNBQWMsQ0FDNUIsWUFBaUQsRUFDakQsT0FBMkIsRUFDM0IsS0FBd0IsRUFDeEIsT0FBOEI7WUFFOUIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLE9BQU8sRUFDUCw2QkFBNkIsRUFDN0IsT0FBTyxFQUNQLHdCQUF3QixFQUN4QixLQUFLLENBQ04sQ0FBQTtRQUNILENBQUM7UUFkZSwyQkFBYyxpQkFjN0IsQ0FBQTtRQUVELFNBQWdCLGNBQWMsQ0FDNUIsWUFBaUQsRUFDakQsT0FBMkIsRUFDM0IsS0FBd0IsRUFDeEIsT0FBZTtZQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osT0FBTyxFQUNQLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsUUFBUSxFQUNSLEtBQUssQ0FDTixDQUFBO1FBQ0gsQ0FBQztRQWRlLDJCQUFjLGlCQWM3QixDQUFBO0lBQ0gsQ0FBQyxFQTVEZ0IsWUFBWSxHQUFaLGlCQUFZLEtBQVosaUJBQVksUUE0RDVCO0FBQ0gsQ0FBQyxFQTlEZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBOERwQiJ9