"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUIDV4 = require("uuid/v4");
const client_1 = require("./client");
const streams_1 = require("./streams");
const format_1 = require("./format");
const core_1 = require("@most/core");
const clientError = (errorText) => new Error('[client] ' + errorText);
const serverError = (errorText) => new Error('[server] ' + errorText);
const unexpectedResponseError = serverError('unexpected response');
const internalServerError = serverError('internal exception');
const timeoutError = (time) => clientError('request timed out (' + time.toString() + ')');
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
                    reject(internalServerError);
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
    const [push, error, close, stream] = streams_1.pushStream();
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
                error(internalServerError);
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
    return streams_1.hold(stream);
}
// T is request type.
// U is response type.
function call(installResponseHandler, bridgeClient, route, request, typeURef, token) {
    const [id, requestMessage] = buildRequestOfAuth(token)(route, request);
    const deferredResponse = installResponseHandler(bridgeClient, typeURef, id);
    try {
        bridgeClient.socketClient.send(requestMessage);
    }
    catch (exception) {
        client_1.cancelResponseIfError(bridgeClient, id);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQVc5RCx1Q0FBcUQ7QUFDckQscUNBQThDO0FBSTlDLHFDQUFtQztBQUVuQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQTtBQUM3RSxNQUFNLFdBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQTtBQUM3RSxNQUFNLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xFLE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDN0QsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFFakcsU0FBUyxrQkFBa0IsQ0FBSyxLQUF5QjtJQUl2RCxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFBO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsTUFBTSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBZSxFQUFFLENBQUE7UUFDMUMsTUFBTSxjQUFjLEdBQW1CLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7UUFDdEUsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7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