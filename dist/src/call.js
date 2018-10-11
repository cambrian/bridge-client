"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
const client_1 = require("./client");
const streams_1 = require("./streams");
const format_1 = require("./format");
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
    if (timeout)
        catchStreamTimeout(timeout, stream, client_1.cancelResponseIfError(bridgeClient, id));
    return stream;
}
exports.streaming = streaming;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVU5RCx1Q0FBbUQ7QUFDbkQscUNBQThDO0FBSzlDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUM1RSxNQUFNLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBRS9GLFNBQVMsa0JBQWtCLENBQUUsR0FBdUI7SUFDbEQsSUFBSSxpQkFBUSxDQUFXLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7S0FDdkM7U0FBTSxjQUFjLENBQUM7UUFDcEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2pEO0FBQ0gsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUssS0FBeUI7SUFJdkQsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUN4QixNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQTtRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQWUsRUFBRSxDQUFBO1FBQzFDLE1BQU0sY0FBYyxHQUFtQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFBO1FBQ3RFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxD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