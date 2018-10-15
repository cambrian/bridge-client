"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
const client_1 = require("./client");
const streams_1 = require("./streams");
const format_1 = require("./format");
const core_1 = require("@most/core");
const unexpectedResponseError = new Error('unexpected response from server');
const timeoutError = (time) => new Error('request timed out (' + time.toString() + ')');
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
        const headers = { token: token };
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
                if (format_1.validate('StreamingResponse', res)) {
                    if (format_1.validate('IResult', res)) {
                        if (format_1.validate(typeTRef, res.contents)) {
                            push(res.contents);
                            validated = true;
                        }
                    }
                    else if (format_1.validate('IHeartbeat', res)) {
                        push(res);
                        validated = true;
                    }
                    else { /* IEndOfResults */
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
    return [id, deferredResponse];
}
// Run a custom handler if a Promise times out.
function catchPromiseTimeout(timeout, promise, 
// Timeout handler used for cleanup logic.
timeoutHandler) {
    const timer = setTimeout(() => timeoutHandler(timeoutError(timeout)), timeout);
    promise.then(() => clearTimeout(timer)).catch(() => clearTimeout(timer));
}
// Run a custom handler if stream elements time out.
function catchStreamTimeout(timeout, stream, 
// Timeout handler used for cleanup logic.
timeoutHandler) {
    const makeTimer = () => setTimeout(() => timeoutHandler(timeoutError(timeout)), timeout);
    let timer = makeTimer();
    streams_1.observe(() => {
        clearTimeout(timer);
        timer = makeTimer();
    }, stream).catch(() => clearTimeout(timer));
}
function direct(bridgeClient, timeout, route, request, typeURef, token) {
    const [id, promise] = call(installDirectHandler, bridgeClient, route, request, typeURef, token);
    if (timeout)
        catchPromiseTimeout(timeout, promise, client_1.cancelResponseIfError(bridgeClient, id));
    return promise;
}
exports.direct = direct;
function streaming(bridgeClient, timeout, route, request, typeURef, token) {
    const [id, stream] = call(installStreamingHandler, bridgeClient, route, request, typeURef, token);
    // Timeout listens on a stream with heartbeats, but clients of this library do not.
    if (timeout)
        catchStreamTimeout(timeout, stream, client_1.cancelResponseIfError(bridgeClient, id));
    return core_1.filter(x => !format_1.validate('IHeartbeat', x), stream);
}
exports.streaming = streaming;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVc5RCx1Q0FBbUQ7QUFDbkQscUNBQThDO0FBSTlDLHFDQUFtQztBQUVuQyxNQUFNLHVCQUF1QixHQUFHLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDNUUsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtBQUUvRixTQUFTLGtCQUFrQixDQUFFLEdBQXVCO0lBQ2xELElBQUksaUJBQVEsQ0FBVyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0tBQ3ZDO1NBQU0sY0FBYyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqRDtBQUNILENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFLLEtBQXlCO0lBSXZELE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDeEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUE7UUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QyxNQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFlLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLGNBQWMsR0FBbUIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQTtRQUN0RSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FB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