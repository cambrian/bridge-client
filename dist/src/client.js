"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./format");
// Future Task: Generalize client over transports.
// Future Task: Automate type validation even more.
function makeResponseHandler(bridgeClient) {
    const { responseQueues } = bridgeClient;
    return (data) => {
        const message = data.toString();
        const responseMessage = format_1.safeParse(message);
        // This is ugly and repetitive, but basically the type parameter is the type that is being
        // coerced to via type guard, and the string is the schema ref being validated against.
        if (format_1.validate('ResponseMessage', responseMessage)) {
            let queue = responseQueues.get(responseMessage.requestId);
            if (queue)
                queue.push(responseMessage.resText);
        }
    };
}
var BridgeClient;
(function (BridgeClient) {
    function make(socketClient) {
        const responseQueues = new Map();
        const bridgeClient = { socketClient, responseQueues };
        activate(bridgeClient);
        return bridgeClient;
    }
    BridgeClient.make = make;
    function activate(bridgeClient) {
        deactivate(bridgeClient); // Just for sanity.
        bridgeClient.responseHandler = makeResponseHandler(bridgeClient);
        bridgeClient.socketClient.on('message', bridgeClient.responseHandler);
    }
    BridgeClient.activate = activate;
    function deactivate(bridgeClient) {
        if (bridgeClient.responseHandler) {
            bridgeClient.socketClient.off('message', bridgeClient.responseHandler);
            bridgeClient.responseHandler = undefined;
        }
    }
    BridgeClient.deactivate = deactivate;
})(BridgeClient = exports.BridgeClient || (exports.BridgeClient = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHFDQUE4QztBQUU5QyxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELFNBQVMsbUJBQW1CLENBQUUsWUFBNEI7SUFDeEQsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLFlBQVksQ0FBQTtJQUN2QyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDL0IsTUFBTSxlQUFlLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQywwRkFBMEY7UUFDMUYsdUZBQXVGO1FBQ3ZGLElBQUksaUJBQVEsQ0FBa0IsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDekQsSUFBSSxLQUFLO2dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELElBQWlCLFlBQVksQ0EwQjVCO0FBMUJELFdBQWlCLFlBQVk7SUFPM0IsU0FBZ0IsSUFBSSxDQUFFLFlBQXVCO1FBQzNDLE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxFQUFvRCxDQUFBO1FBQ2xGLE1BQU0sWUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxDQUFBO1FBQ3JELFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN0QixPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBTGUsaUJBQUksT0FLbkIsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBRSxZQUFlO1FBQ3ZDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDLG1CQUFtQjtRQUM1QyxZQUFZLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2hFLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUplLHFCQUFRLFdBSXZCLENBQUE7SUFFRCxTQUFnQixVQUFVLENBQUUsWUFBZTtRQUN6QyxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUU7WUFDaEMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUN0RSxZQUFZLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQTtTQUN6QztJQUNILENBQUM7SUFMZSx1QkFBVSxhQUt6QixDQUFBO0FBQ0gsQ0FBQyxFQTFCZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUEwQjVCIn0=