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
            const eitherExcOrRes = format_1.safeParse(response);
            if (format_1.validate('RpcResponse', eitherExcOrRes)) {
                if (format_1.validate('Left<RpcException>', eitherExcOrRes)) {
                    const exc = eitherExcOrRes.Left;
                    if (format_1.validate('IRpcClientException', exc)) {
                        reject(clientError(exc.contents));
                    }
                    else if (format_1.validate('IRpcServerException', exc)) {
                        reject(internalServerError);
                    }
                }
                else {
                    const res = eitherExcOrRes.Right;
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
        const eitherExcOrRes = format_1.safeParse(response);
        if (format_1.validate('RpcResponse', eitherExcOrRes)) {
            if (format_1.validate('Left<RpcException>', eitherExcOrRes)) {
                const exc = eitherExcOrRes.Left;
                if (format_1.validate('IRpcClientException', exc)) {
                    responseHandlers.delete(id);
                    error(clientError(exc.contents));
                    validated = true;
                }
                else if (format_1.validate('IRpcServerException', exc)) {
                    responseHandlers.delete(id);
                    error(internalServerError);
                    validated = true;
                }
            }
            else {
                const res = eitherExcOrRes.Right;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWlDO0FBRWpDLHFDQUE4RDtBQWM5RCx1Q0FBcUQ7QUFDckQscUNBQThDO0FBSTlDLHFDQUFtQztBQUVuQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQTtBQUM3RSxNQUFNLFdBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQTtBQUM3RSxNQUFNLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xFLE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDN0QsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFFakcsU0FBUyxrQkFBa0IsQ0FBSyxLQUF5QjtJQUl2RCxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFBO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsTUFBTSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBZSxFQUFFLENBQUE7UUFDMUMsTUFBTSxjQUFjLEdBQW1CLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7UUFDdEUsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7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