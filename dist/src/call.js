"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
const client_1 = require("./client");
const format_1 = require("./format");
const streams_1 = require("./streams");
const unexpectedResponseError = new Error('unexpected response from server');
function translateException(exc) {
    if (format_1.validate('IBadAuth', exc)) {
        return new Error('bad authentication');
    }
    else /* IBadCall */ {
        return new Error('bad call: ' + exc.contents[1]);
    }
}
function buildRequestOfAuth(token) {
    return (route, request) => {
        const id = UUIDV4();
        const reqText = JSON.stringify(request);
        const headers = { format: 'JSON', token };
        const requestMessage = { id, route, reqText, headers };
        return [id, JSON.stringify(requestMessage)];
    };
}
function installDirectHandler(bridgeClient, typeTRef, id) {
    const { responseHandlers } = bridgeClient;
    return new Promise((resolve, reject) => {
        const handle = (response) => {
            // Only one result expected.
            responseHandlers.delete(id);
            const resOrExc = format_1.safeParse(response);
            if (format_1.validate('Either', resOrExc)) {
                if ('Left' in resOrExc) {
                    const exc = resOrExc.Left;
                    if (format_1.validate('RpcClientException', exc)) {
                        reject(translateException(exc));
                    }
                }
                else {
                    const res = resOrExc.Right;
                    if (format_1.validate(typeTRef, res)) {
                        resolve(res);
                    }
                }
            }
            // No-op if reject or resolve was already called.
            reject(unexpectedResponseError);
        };
        // Reject will propagate error to the Promise.
        responseHandlers.set(id, [handle, reject]);
    });
}
function installStreamingHandler(bridgeClient, typeTRef, id) {
    const { responseHandlers } = bridgeClient;
    const [push, error, close, stream] = streams_1.heldPushStream();
    const handle = (response) => {
        let validated = false;
        const resOrExc = format_1.safeParse(response);
        if (format_1.validate('Either', resOrExc)) {
            if ('Left' in resOrExc) {
                const exc = resOrExc.Left;
                if (format_1.validate('RpcClientException', exc)) {
                    responseHandlers.delete(id);
                    error(translateException(exc));
                    validated = true;
                }
            }
            else {
                const res = resOrExc.Right;
                if (format_1.validate('ResultItem', res)) {
                    if (format_1.validate('IResult', res)) {
                        if (format_1.validate(typeTRef, res.contents)) {
                            push(res.contents);
                            validated = true;
                        }
                    }
                    else {
                        responseHandlers.delete(id);
                        close();
                        validated = true;
                    }
                }
            }
        }
        // Fall-through.
        if (!validated) {
            responseHandlers.delete(id);
            error(unexpectedResponseError);
        }
    };
    // Error will push error to the stream.
    responseHandlers.set(id, [handle, error]);
    return stream;
}
// T is request type.
// U is response type.
function call(installResponseHandler, bridgeClient, route, request, typeURef, token) {
    const [id, requestMessage] = buildRequestOfAuth(token)(route, request);
    const deferredResponse = installResponseHandler(bridgeClient, typeURef, id);
    bridgeClient.socketClient.send(requestMessage, client_1.cancelResponseIfError(bridgeClient, id));
    return deferredResponse;
}
function direct(bridgeClient, route, request, typeURef, token) {
    return call(installDirectHandler, bridgeClient, route, request, typeURef, token);
}
exports.direct = direct;
function streaming(bridgeClient, route, request, typeURef, token) {
    return call(installStreamingHandler, bridgeClient, route, request, typeURef, token);
}
exports.streaming = streaming;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVc5RCxxQ0FBOEM7QUFJOUMsdUNBQTBDO0FBRTFDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUU1RSxTQUFTLGtCQUFrQixDQUFFLEdBQXVCO0lBQ2xELElBQUksaUJBQVEsQ0FBVyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0tBQ3ZDO1NBQU0sY0FBYyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqRDtBQUNILENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFLLEtBQXlCO0lBSXZELE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDeEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUE7UUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QyxNQUFNLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUE2QixFQUFFLEtBQUssRUFBRSxDQUFBO1FBQ2hFLE1BQU0sY0FBYyxHQUFtQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFBO1FBQ3RFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUMzQixZQUE0QixFQUM1QixRQUFtQixFQUNuQixFQUFxQjtJQUVyQixNQUFNLEVBQUUsZ0JB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