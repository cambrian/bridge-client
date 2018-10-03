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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVc5RCx1Q0FBbUQ7QUFDbkQscUNBQThDO0FBSzlDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUM1RSxNQUFNLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBRS9GLFNBQVMsa0JBQWtCLENBQUUsR0FBdUI7SUFDbEQsSUFBSSxpQkFBUSxDQUFXLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7S0FDdkM7U0FBTSxjQUFjLENBQUM7UUFDcEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2pEO0FBQ0gsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUssS0FBeUI7SUFJdkQsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUN4QixNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQTtRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQTZCLEVBQUUsS0FBSyxFQUFFLENBQUE7UUFDaEUsTUFBTSxjQUFjLEdBQW1CLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7UUFDdEUsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMs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