"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("../call");
const core_1 = require("@most/core");
var Server;
(function (Server) {
    class DummyManager {
    }
    Server.DummyManager = DummyManager;
    class TezosOperationQueue {
    }
    Server.TezosOperationQueue = TezosOperationQueue;
    class TezosStats {
    }
    Server.TezosStats = TezosStats;
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
    let TezosOperationQueue;
    (function (TezosOperationQueue) {
        function inject(bridgeClient, request) {
            return call_1.direct(bridgeClient, 20000, 'TezosOperationQueue/inject', request, 'Unit').then(_ => undefined);
        }
        TezosOperationQueue.inject = inject;
    })(TezosOperationQueue = Call.TezosOperationQueue || (Call.TezosOperationQueue = {}));
    let TezosStats;
    (function (TezosStats) {
        function overview(bridgeClient) {
            return call_1.direct(bridgeClient, 20000, 'TezosStats/overview', [], 'OverviewResponse');
        }
        TezosStats.overview = overview;
        function bakers(bridgeClient) {
            return call_1.direct(bridgeClient, 20000, 'TezosStats/bakers', [], 'BakersResponse');
        }
        TezosStats.bakers = bakers;
        function implicit(bridgeClient, request) {
            return call_1.direct(bridgeClient, 20000, 'TezosStats/implicit', request, 'ImplicitResponse');
        }
        TezosStats.implicit = implicit;
        function operation(bridgeClient, request) {
            return call_1.streaming(bridgeClient, 20000, 'TezosStats/operation', request, 'OperationResponse');
        }
        TezosStats.operation = operation;
    })(TezosStats = Call.TezosStats || (Call.TezosStats = {}));
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtDQUEyQztBQUkzQyxxQ0FBZ0M7QUFFaEMsSUFBaUIsTUFBTSxDQUl0QjtBQUpELFdBQWlCLE1BQU07SUFDckIsTUFBYSxZQUFZO0tBQXFCO0lBQWpDLG1CQUFZLGVBQXFCLENBQUE7SUFDOUMsTUFBYSxtQkFBbUI7S0FBcUI7SUFBeEMsMEJBQW1CLHNCQUFxQixDQUFBO0lBQ3JELE1BQWEsVUFBVTtLQUFxQjtJQUEvQixpQkFBVSxhQUFxQixDQUFBO0FBQzlDLENBQUMsRUFKZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBSXRCO0FBRUQsSUFBaUIsSUFBSSxDQStLcEI7QUEvS0QsV0FBaUIsSUFBSTtJQUNuQixJQUFpQixZQUFZLENBMEc1QjtJQTFHRCxXQUFpQixZQUFZO1FBQzNCLFNBQWdCLE9BQU8sQ0FDckIsWUFBaUQsRUFDakQsT0FBeUI7WUFFekIsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxzQkFBc0IsRUFDdEIsT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFBO1FBQ0gsQ0FBQztRQVhlLG9CQUFPLFVBV3RCLENBQUE7UUFFRCxTQUFnQixVQUFVLENBQ3hCLFlBQWlELEVBQ2pELE9BQXlCO1lBRXpCLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixDQUFDLEVBQ0QseUJBQXlCLEVBQ3pCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFYZSx1QkFBVSxhQVd6QixDQUFBO1FBRUQsU0FBZ0IsVUFBVSxDQUN4QixZQUFpRCxFQUNqRCxPQUFlO1lBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixLQUFLLEVBQ0wseUJBQXlCLEVBQ3pCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFYZSx1QkFBVSxhQVd6QixDQUFBO1FBRUQsU0FBZ0IsYUFBYSxDQUMzQixZQUFpRCxFQUNqRCxPQUFlO1lBRWYsT0FBTyxnQkFBUyxDQUNkLFlBQVksRUFDWixDQUFDLEVBQ0QsNEJBQTRCLEVBQzVCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtRQUNILENBQUM7UUFYZSwwQkFBYSxnQkFXNUIsQ0FBQTtRQUVELFNBQWdCLGNBQWMsQ0FDNUIsWUFBaUQsRUFDakQsS0FBMEIsRUFDMUIsT0FBZ0M7WUFFaEMsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCw2QkFBNkIsRUFDN0IsT0FBTyxFQUNQLHdCQUF3QixFQUN4QixLQUFLLENBQ04sQ0FBQTtRQUNILENBQUM7UUFiZSwyQkFBYyxpQkFhN0IsQ0FBQTtRQUVELFNBQWdCLGNBQWMsQ0FDNUIsWUFBaUQsRUFDakQsS0FBMEIsRUFDMUIsT0FBZTtZQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osS0FBSyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsUUFBUSxFQUNSLEtBQUssQ0FDTixDQUFBO1FBQ0gsQ0FBQztRQWJlLDJCQUFjLGlCQWE3QixDQUFBO1FBRUQsU0FBZ0IsT0FBTyxDQUNyQixZQUFpRDtZQUVqRCxPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLHNCQUFzQixFQUN0QixFQUFFLEVBQ0YsTUFBTSxDQUNQLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDeEIsQ0FBQztRQVZlLG9CQUFPLFVBVXRCLENBQUE7UUFFRCxTQUFnQixhQUFhLENBQzNCLFlBQWlEO1lBRWpELE9BQU8sVUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLGdCQUFTLENBQ2xDLFlBQVksRUFDWixLQUFLLEVBQ0wsNEJBQTRCLEVBQzVCLEVBQUUsRUFDRixNQUFNLENBQ1AsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQVZlLDBCQUFhLGdCQVU1QixDQUFBO0lBQ0gsQ0FBQyxFQTFHZ0IsWUFBWSxHQUFaLGlCQUFZLEtBQVosaUJBQVksUUEwRzVCO0lBRUQsSUFBaUIsbUJBQW1CLENBYW5DO0lBYkQsV0FBaUIsbUJBQW1CO1FBQ2xDLFNBQWdCLE1BQU0sQ0FDcEIsWUFBd0QsRUFDeEQsT0FBd0M7WUFFeEMsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCw0QkFBNEIsRUFDNUIsT0FBTyxFQUNQLE1BQU0sQ0FDUCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUFYZSwwQkFBTSxTQVdyQixDQUFBO0lBQ0gsQ0FBQyxFQWJnQixtQkFBbUIsR0FBbkIsd0JBQW1CLEtBQW5CLHdCQUFtQixRQWFuQztJQUVELElBQWlCLFVBQVUsQ0FrRDFCO0lBbERELFdBQWlCLFVBQVU7UUFDekIsU0FBZ0IsUUFBUSxDQUN0QixZQUErQztZQUUvQyxPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLHFCQUFxQixFQUNyQixFQUFFLEVBQ0Ysa0JBQWtCLENBQ25CLENBQUE7UUFDSCxDQUFDO1FBVmUsbUJBQVEsV0FVdkIsQ0FBQTtRQUVELFNBQWdCLE1BQU0sQ0FDcEIsWUFBK0M7WUFFL0MsT0FBTyxhQUFNLENBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxtQkFBbUIsRUFDbkIsRUFBRSxFQUNGLGdCQUFnQixDQUNqQixDQUFBO1FBQ0gsQ0FBQztRQVZlLGlCQUFNLFNBVXJCLENBQUE7UUFFRCxTQUFnQixRQUFRLENBQ3RCLFlBQStDLEVBQy9DLE9BQTBDO1lBRTFDLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wscUJBQXFCLEVBQ3JCLE9BQU8sRUFDUCxrQkFBa0IsQ0FDbkIsQ0FBQTtRQUNILENBQUM7UUFYZSxtQkFBUSxXQVd2QixDQUFBO1FBRUQsU0FBZ0IsU0FBUyxDQUN2QixZQUErQyxFQUMvQyxPQUE0QztZQUU1QyxPQUFPLGdCQUFTLENBQ2QsWUFBWSxFQUNaLEtBQUssRUFDTCxzQkFBc0IsRUFDdEIsT0FBTyxFQUNQLG1CQUFtQixDQUNwQixDQUFBO1FBQ0gsQ0FBQztRQVhlLG9CQUFTLFlBV3hCLENBQUE7SUFDSCxDQUFDLEVBbERnQixVQUFVLEdBQVYsZUFBVSxLQUFWLGVBQVUsUUFrRDFCO0FBQ0gsQ0FBQyxFQS9LZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBK0twQiJ9