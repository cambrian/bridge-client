"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
const client_1 = require("./client");
const streams_1 = require("./streams");
const format_1 = require("./format");
const core_1 = require("@most/core");
const clientError = (errorText) => new Error('client error: ' + errorText);
const serverError = (errorText) => new Error('server error: ' + errorText);
const unexpectedResponseError = new Error('server error: unexpected response');
const timeoutError = (time) => new Error('server error: request timed out ('
    + time.toString() + ')');
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
            if (format_1.validate('RpcResponse', resOrExc)) {
                if (format_1.validate('IRpcResponseClientException', resOrExc)) {
                    reject(clientError(resOrExc.contents));
                }
                else if (format_1.validate('IRpcResponseServerException', resOrExc)) {
                    reject(serverError(resOrExc.contents));
                }
                else {
                    const res = resOrExc.contents;
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
        if (format_1.validate('RpcResponse', resOrExc)) {
            if (format_1.validate('IRpcResponseClientException', resOrExc)) {
                responseHandlers.delete(id);
                error(clientError(resOrExc.contents));
                validated = true;
            }
            else if (format_1.validate('IRpcResponseServerException', resOrExc)) {
                responseHandlers.delete(id);
                error(serverError(resOrExc.contents));
                validated = true;
            }
            else {
                const res = resOrExc.contents;
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
    }, stream)
        .then(() => clearTimeout(timer))
        .catch(() => clearTimeout(timer));
}
function direct(bridgeClient, timeout, route, request, typeURef, token) {
    const [id, promise] = call(installDirectHandler, bridgeClient, route, request, typeURef, token);
    if (timeout)
        catchPromiseTimeout(timeout, promise, client_1.cancelResponseIfError(bridgeClient, id));
    return promise;
}
exports.direct = direct;
// Since all errors are propagated via the stream, this streaming client has different semantics
// than the Haskell streaming client. In particular, the stream is returned immediately, rather than
// waiting for the first value to materialize.
function streaming(bridgeClient, timeout, route, request, typeURef, token) {
    const [id, stream] = call(installStreamingHandler, bridgeClient, route, request, typeURef, token);
    // Timeout listens on a stream with heartbeats, but clients of this library do not.
    if (timeout)
        catchStreamTimeout(timeout, stream, client_1.cancelResponseIfError(bridgeClient, id));
    return core_1.filter(x => !format_1.validate('IHeartbeat', x), stream);
}
exports.streaming = streaming;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVc5RCx1Q0FBbUQ7QUFDbkQscUNBQThDO0FBSTlDLHFDQUFtQztBQUVuQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxDQUFBO0FBQ2xGLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUE7QUFDbEYsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlFLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQ0FBbUM7TUFDaEYsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBRTFCLFNBQVMsa0JBQWtCLENBQUssS0FBeUI7SUFJdkQsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUN4QixNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQTtRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQWUsRUFBRSxDQUFBO1FBQzFDLE1BQU0sY0FBYyxHQUFtQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFBO1FBQ3RFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFT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