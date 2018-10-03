"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./format");
const closeError = new Error('socket client was closed externally');
const unknownError = new Error('bridge client encountered an unknown error');
// Future Tasks: Automate type validation even more and consider supporting other transports.
function makeResponseDispatcher(bridgeClient) {
    const { responseHandlers } = bridgeClient;
    return (data) => {
        const message = data.toString();
        const responseMessage = format_1.safeParse(message);
        // This is ugly and repetitive, but basically the type parameter is the type that is being
        // coerced to via type guard, and the string is the schema ref being validated against.
        if (format_1.validate('ResponseMessage', responseMessage)) {
            const handleOrError = responseHandlers.get(responseMessage.requestId);
            if (handleOrError) {
                const [handle] = handleOrError;
                handle(responseMessage.resText);
            }
        }
    };
}
function makeInterruptHandler(responseHandlers, errorDefault) {
    return (errorReceived) => responseHandlers.forEach(([_, error]) => errorReceived ? error(errorReceived) : error(errorDefault));
}
var BridgeClient;
(function (BridgeClient) {
    function make(socketClient) {
        const responseHandlers = new Map();
        const closeHandler = makeInterruptHandler(responseHandlers, closeError);
        const errorHandler = makeInterruptHandler(responseHandlers, unknownError);
        const bridgeClient = { closeHandler, errorHandler, responseHandlers, socketClient };
        activate(bridgeClient);
        return bridgeClient;
    }
    BridgeClient.make = make;
    // Use activate only after deactivation (prefer make).
    function activate(bridgeClient) {
        deactivate(bridgeClient); // Just for sanity.
        bridgeClient.responseDispatcher = makeResponseDispatcher(bridgeClient);
        bridgeClient.socketClient.on('message', bridgeClient.responseDispatcher);
        bridgeClient.socketClient.on('close', bridgeClient.closeHandler);
        bridgeClient.socketClient.on('error', bridgeClient.errorHandler);
    }
    BridgeClient.activate = activate;
    function deactivate(bridgeClient) {
        if (bridgeClient.responseDispatcher) {
            bridgeClient.socketClient.off('error', bridgeClient.errorHandler);
            bridgeClient.socketClient.off('close', bridgeClient.closeHandler);
            bridgeClient.socketClient.off('message', bridgeClient.responseDispatcher);
            bridgeClient.responseDispatcher = undefined;
        }
    }
    BridgeClient.deactivate = deactivate;
})(BridgeClient = exports.BridgeClient || (exports.BridgeClient = {}));
function cancelResponseIfError(bridgeClient, id) {
    return (errorValue) => {
        if (errorValue) {
            const { responseHandlers } = bridgeClient;
            const handleOrError = responseHandlers.get(id);
            if (handleOrError) {
                const [, error] = handleOrError;
                error(errorValue);
            }
        }
    };
}
exports.cancelResponseIfError = cancelResponseIfError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFDQUE4QztBQUU5QyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ25FLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7QUFHNUUsNkZBQTZGO0FBQzdGLFNBQVMsc0JBQXNCLENBQUUsWUFBNEI7SUFDM0QsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsWUFBWSxDQUFBO0lBQ3pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNkLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUMvQixNQUFNLGVBQWUsR0FBRyxrQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFDLDBGQUEwRjtRQUMxRix1RkFBdUY7UUFDdkYsSUFBSSxpQkFBUSxDQUFrQixpQkFBaUIsRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNqRSxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JFLElBQUksYUFBYSxFQUFFO2dCQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFBO2dCQUM5QixNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDLENBQUE7QUFDSCxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsZ0JBQXVELEVBQ3ZELFlBQW1CO0lBRW5CLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FDaEUsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxD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