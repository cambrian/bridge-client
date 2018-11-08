"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./format");
// Future Tasks: Automate type validation even more and consider supporting other transports.
function makeResponseDispatcher(bridgeClient) {
    const { responseHandlers } = bridgeClient;
    return (event) => {
        const { data } = event;
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
function makeErrorHandler(responseHandlers) {
    return (errorEvent) => responseHandlers.forEach(([_, error]) => error(new Error('[socket error] ' + errorEvent.message)));
}
function makeCloseHandler(responseHandlers) {
    return (closeEvent) => responseHandlers.forEach(([_, error]) => error(new Error('[socket closed] ' + closeEvent.reason)));
}
var BridgeClient;
(function (BridgeClient) {
    function make(socketClient) {
        const responseHandlers = new Map();
        const closeHandler = makeCloseHandler(responseHandlers);
        const errorHandler = makeErrorHandler(responseHandlers);
        const bridgeClient = { closeHandler, errorHandler, responseHandlers, socketClient };
        activate(bridgeClient);
        return bridgeClient;
    }
    BridgeClient.make = make;
    // Use activate only after deactivation (prefer make).
    function activate(bridgeClient) {
        deactivate(bridgeClient); // Just for sanity.
        bridgeClient.socketClient.onmessage = makeResponseDispatcher(bridgeClient);
        bridgeClient.socketClient.onclose = bridgeClient.closeHandler;
        bridgeClient.socketClient.onerror = bridgeClient.errorHandler;
    }
    BridgeClient.activate = activate;
    function deactivate(bridgeClient) {
        if (bridgeClient.responseDispatcher) {
            bridgeClient.socketClient.onerror = () => undefined;
            bridgeClient.socketClient.onclose = () => undefined;
            bridgeClient.socketClient.onmessage = () => undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFDQUE4QztBQU85Qyw2RkFBNkY7QUFDN0YsU0FBUyxzQkFBc0IsQ0FBSyxZQUErQjtJQUVqRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxZQUFZLENBQUE7SUFDekMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDL0IsTUFBTSxlQUFlLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQywwRkFBMEY7UUFDMUYsdUZBQXVGO1FBQ3ZGLElBQUksaUJBQVEsQ0FBa0IsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNyRSxJQUFJLGFBQWEsRUFBRTtnQkFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQTtnQkFDOUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNoQztTQUNGO0lBQ0gsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUUsZ0JBQXVEO0lBRWhGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FDN0QsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0QsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUUsZ0JBQXVEO0lBRWhGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FDN0QsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0QsQ0FBQztBQUVELElBQWlCLFlBQVksQ0FtQzVCO0FBbkNELFdBQWlCLFlBQVk7SUFXM0IsU0FBZ0IsSUFBSSxDQUFLLFlBQXVCO1FBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQW9DLENBQUE7UUFDcEUsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUN2RCxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZELE1BQU0sWUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQTtRQUNuRixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdEIsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQVBlLGlCQUFJLE9BT25CLENBQUE7SUFFRCxzREFBc0Q7SUFDdEQsU0FBZ0IsUUFBUSxDQUFLLFlBQWtCO1FBQzdDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDLG1CQUFtQjtRQUM1QyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMxRSxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFBO1FBQzdELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUE7SUFDL0QsQ0FBQztJQUxlLHFCQUFRLFdBS3ZCLENBQUE7SUFFRCxTQUFnQixVQUFVLENBQUssWUFBa0I7UUFDL0MsSUFBSSxZQUFZLENBQUMsa0JBQWtCLEVBQUU7WUFDbkMsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFBO1lBQ25ELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQTtZQUNuRCxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUE7U0FDdEQ7SUFDSCxDQUFDO0lBTmUsdUJBQVUsYUFNekIsQ0FBQTtBQUNILENBQUMsRUFuQ2dCLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBbUM1QjtBQUVELFNBQWdCLHFCQUFxQixDQUFLLFlBQStCLEVBQUUsRUFBcUI7SUFFOUYsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQ3BCLElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsWUFBWSxDQUFBO1lBQ3pDLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUM5QyxJQUFJLGFBQWEsRUFBRTtnQkFDakIsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFBO2dCQUMvQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDbEI7U0FDRjtJQUNILENBQUMsQ0FBQTtBQUNILENBQUM7QUFaRCxzREFZQyJ9