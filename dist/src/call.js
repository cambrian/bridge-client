"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
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
    // bridgeClient.socketClient.send(requestMessage, cancelResponseIfError(bridgeClient, id))
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
    // if (timeout) catchPromiseTimeout(timeout, promise, cancelResponseIfError(bridgeClient, id))
    return promise;
}
exports.direct = direct;
function streaming(bridgeClient, timeout, route, request, typeURef, token) {
    const [id, stream] = call(installStreamingHandler, bridgeClient, route, request, typeURef, token);
    // if (timeout) catchStreamTimeout(timeout, stream, cancelResponseIfError(bridgeClient, id))
    return stream;
}
exports.streaming = streaming;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBYWpDLHVDQUFtRDtBQUNuRCxxQ0FBOEM7QUFLOUMsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQzVFLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFFL0YsU0FBUyxrQkFBa0IsQ0FBRSxHQUF1QjtJQUNsRCxJQUFJLGlCQUFRLENBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtLQUN2QztTQUFNLGNBQWMsQ0FBQztRQUNwQixPQUFPLElBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDakQ7QUFDSCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBSyxLQUF5QjtJQUl2RCxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFBO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsTUFBTSxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBNkIsRUFBRSxLQUFLLEVBQUUsQ0FBQTtRQUNoRSxNQUFNLGNBQWMsR0FBbUIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQTtRQUN0RSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FB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