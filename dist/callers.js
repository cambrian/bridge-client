"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue = require("better-queue");
const UUIDV4 = require("uuid/v4");
const helpers_1 = require("./helpers");
const failedRequest = 'failed to send request';
const unexpectedResponse = 'unexpected response from server';
var Call;
(function (Call) {
    // A temporary example to be templated.
    function addIntsSigned(bridgeClient, request) {
        let id = UUIDV4();
        let route = 'addSignedInts';
        let reqText = JSON.stringify(request);
        let headers = { format: 'JSON' };
        let requestMessage = { id, route, reqText, headers };
        let { socketClient, responseQueues } = bridgeClient;
        // TODO: Promisify send to make this fn async.
        return new Promise((resolve, reject) => {
            responseQueues.set(id, new Queue(response => {
                let resOrExc = helpers_1.safeParse(response);
                if (helpers_1.validate('Either', resOrExc)) {
                    if ('Left' in resOrExc) {
                        let exc = resOrExc.Left;
                        if (helpers_1.validate('RpcClientException', exc)) {
                            reject(exc); // TODO: Give informative errors.
                        }
                        else {
                            reject(unexpectedResponse);
                        }
                    }
                    else {
                        let res = resOrExc.Right;
                        if (helpers_1.validate('IResult', res)
                            && helpers_1.validate('number', res.contents)) {
                            resolve(res.contents);
                        }
                        else {
                            reject(unexpectedResponse);
                        }
                    }
                }
            }));
            socketClient.send(JSON.stringify(requestMessage), (error) => {
                if (error)
                    reject(failedRequest);
            });
        });
    }
    Call.addIntsSigned = addIntsSigned;
})(Call = exports.Call || (exports.Call = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWxsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFDO0FBQ3JDLGtDQUFpQztBQVdqQyx1Q0FBK0M7QUFJL0MsTUFBTSxhQUFhLEdBQVcsd0JBQXdCLENBQUE7QUFDdEQsTUFBTSxrQkFBa0IsR0FBVyxpQ0FBaUMsQ0FBQTtBQUVwRSxJQUFpQixJQUFJLENBMkNwQjtBQTNDRCxXQUFpQixJQUFJO0lBQ25CLHVDQUF1QztJQUN2QyxTQUFnQixhQUFhLENBQzNCLFlBQTBCLEVBQzFCLE9BQTZCO1FBRTdCLElBQUksRUFBRSxHQUFHLE1BQU0sRUFBdUIsQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxlQUFnQyxDQUFBO1FBQzVDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFvQixDQUFBO1FBQ3hELElBQUksT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQTZCLEVBQUUsQ0FBQTtRQUV2RCxJQUFJLGNBQWMsR0FBbUIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQTtRQUNwRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxHQUFHLFlBQVksQ0FBQTtRQUVuRCw4Q0FBOEM7UUFDOUMsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM3QyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxRQUFRLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxrQkFBUSxDQUFtQixRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQ2xELElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTt3QkFDdEIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQTt3QkFDdkIsSUFBSSxrQkFBUSxDQUFxQixvQkFBb0IsRUFBRSxHQUFHLENBQUMsRUFBRTs0QkFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsaUNBQWlDO3lCQUM5Qzs2QkFBTTs0QkFDTCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTt5QkFDM0I7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTt3QkFDeEIsSUFBSSxrQkFBUSxDQUFlLFNBQVMsRUFBRSxHQUFHLENBQUM7K0JBQ3JDLGtCQUFRLENBQVMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTt5QkFDdEI7NkJBQU07NEJBQ0wsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7eUJBQzNCO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUVILFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMxRCxJQUFJLEtBQUs7b0JBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBeENlLGtCQUFhLGdCQXdDNUIsQ0FBQTtBQUNILENBQUMsRUEzQ2dCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQTJDcEIifQ==