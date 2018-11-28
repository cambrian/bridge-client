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
var DummyManager;
(function (DummyManager) {
    function addInts(bridgeClient, request) {
        return call_1.direct(bridgeClient, 20000, 'dummy-manager/addInts', request, 'number');
    }
    DummyManager.addInts = addInts;
    function addIntsBad(bridgeClient, request) {
        return call_1.direct(bridgeClient, 1, 'dummy-manager/addIntsBad', request, 'number');
    }
    DummyManager.addIntsBad = addIntsBad;
    function echoThrice(bridgeClient, request) {
        return call_1.streaming(bridgeClient, 20000, 'dummy-manager/echoThrice', request, 'number');
    }
    DummyManager.echoThrice = echoThrice;
    function echoThriceBad(bridgeClient, request) {
        return call_1.streaming(bridgeClient, 1, 'dummy-manager/echoThriceBad', request, 'number');
    }
    DummyManager.echoThriceBad = echoThriceBad;
    function concatTextAuth(bridgeClient, token, request) {
        return call_1.direct(bridgeClient, 20000, 'dummy-manager/concatTextAuth', request, 'ConcatTextAuthResponse', token);
    }
    DummyManager.concatTextAuth = concatTextAuth;
    function echoThriceAuth(bridgeClient, token, request) {
        return call_1.streaming(bridgeClient, 20000, 'dummy-manager/echoThriceAuth', request, 'string', token);
    }
    DummyManager.echoThriceAuth = echoThriceAuth;
    function getVoid(bridgeClient) {
        return call_1.direct(bridgeClient, 20000, 'dummy-manager/getVoid', [], 'Unit').then(_ => undefined);
    }
    DummyManager.getVoid = getVoid;
    function getVoidStream(bridgeClient) {
        return core_1.map(_ => undefined, call_1.streaming(bridgeClient, 20000, 'dummy-manager/getVoidStream', [], 'Unit'));
    }
    DummyManager.getVoidStream = getVoidStream;
})(DummyManager = exports.DummyManager || (exports.DummyManager = {}));
var TezosOperationQueue;
(function (TezosOperationQueue) {
    function inject(bridgeClient, request) {
        return call_1.direct(bridgeClient, 20000, 'tezos-operation-queue/inject', request, 'Unit').then(_ => undefined);
    }
    TezosOperationQueue.inject = inject;
})(TezosOperationQueue = exports.TezosOperationQueue || (exports.TezosOperationQueue = {}));
var TezosStats;
(function (TezosStats) {
    function overview(bridgeClient) {
        return call_1.direct(bridgeClient, 20000, 'tezos-stats/overview', [], 'OverviewResponse');
    }
    TezosStats.overview = overview;
    function bakers(bridgeClient) {
        return call_1.direct(bridgeClient, 20000, 'tezos-stats/bakers', [], 'BakersResponse');
    }
    TezosStats.bakers = bakers;
    function implicit(bridgeClient, request) {
        return call_1.direct(bridgeClient, 20000, 'tezos-stats/implicit', request, 'ImplicitResponse');
    }
    TezosStats.implicit = implicit;
    function operation(bridgeClient, request) {
        return call_1.streaming(bridgeClient, 20000, 'tezos-stats/operation', request, 'OperationResponse');
    }
    TezosStats.operation = operation;
})(TezosStats = exports.TezosStats || (exports.TezosStats = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvY2FsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtDQUEyQztBQUszQyxxQ0FBZ0M7QUFFaEMsSUFBaUIsTUFBTSxDQUl0QjtBQUpELFdBQWlCLE1BQU07SUFDckIsTUFBYSxZQUFZO0tBQXFCO0lBQWpDLG1CQUFZLGVBQXFCLENBQUE7SUFDOUMsTUFBYSxtQkFBbUI7S0FBcUI7SUFBeEMsMEJBQW1CLHNCQUFxQixDQUFBO0lBQ3JELE1BQWEsVUFBVTtLQUFxQjtJQUEvQixpQkFBVSxhQUFxQixDQUFBO0FBQzlDLENBQUMsRUFKZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBSXRCO0FBRUQsSUFBaUIsWUFBWSxDQTBHNUI7QUExR0QsV0FBaUIsWUFBWTtJQUMzQixTQUFnQixPQUFPLENBQ3JCLFlBQWlELEVBQ2pELE9BQXlCO1FBRXpCLE9BQU8sYUFBTSxDQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLE9BQU8sRUFDUCxRQUFRLENBQ1QsQ0FBQTtJQUNILENBQUM7SUFYZSxvQkFBTyxVQVd0QixDQUFBO0lBRUQsU0FBZ0IsVUFBVSxDQUN4QixZQUFpRCxFQUNqRCxPQUF5QjtRQUV6QixPQUFPLGFBQU0sQ0FDWCxZQUFZLEVBQ1osQ0FBQyxFQUNELDBCQUEwQixFQUMxQixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7SUFDSCxDQUFDO0lBWGUsdUJBQVUsYUFXekIsQ0FBQTtJQUVELFNBQWdCLFVBQVUsQ0FDeEIsWUFBaUQsRUFDakQsT0FBZTtRQUVmLE9BQU8sZ0JBQVMsQ0FDZCxZQUFZLEVBQ1osS0FBSyxFQUNMLDBCQUEwQixFQUMxQixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUE7SUFDSCxDQUFDO0lBWGUsdUJBQVUsYUFXekIsQ0FBQTtJQUVELFNBQWdCLGFBQWEsQ0FDM0IsWUFBaUQsRUFDakQs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