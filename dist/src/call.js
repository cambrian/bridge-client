"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue = require("better-queue");
const UUIDV4 = require("uuid/v4");
const streams_1 = require("./streams");
const format_1 = require("./format");
const failedRequest = 'failed to send request';
const unexpectedClose = 'connection unexpectedly closed';
const unexpectedError = 'connection unexpectedly errored';
const unexpectedResponse = 'unexpected response from server';
function readableException(exc) {
    if (format_1.validate('IBadAuth', exc)) {
        return 'bad authentication';
    }
    else /* IBadCall */ {
        return 'bad call: ' + exc.contents[1];
    }
}
function makeInterruptHandler(reason) {
    return (bridgeClient, reject, id) => {
        const { responseQueues } = bridgeClient;
        return () => {
            responseQueues.delete(id);
            reject(reason);
        };
    };
}
const makeCloseHandler = makeInterruptHandler(unexpectedClose);
const makeErrorHandler = makeInterruptHandler(unexpectedError);
// Returns listener clean-up fn.
function makeInterruptListener(bridgeClient, reject, id) {
    const { responseQueues, socketClient } = bridgeClient;
    const closeHandler = makeCloseHandler(bridgeClient, reject, id);
    const errorHandler = makeErrorHandler(bridgeClient, reject, id);
    socketClient.on('close', closeHandler);
    socketClient.on('error', errorHandler);
    return () => {
        socketClient.off('close', closeHandler);
        socketClient.off('error', errorHandler);
        responseQueues.delete(id);
    };
}
function makeDirectHandler(bridgeClient, resolve, reject, typeTRef, id) {
    const clean = makeInterruptListener(bridgeClient, reject, id);
    const handle = (response, done) => {
        clean(); // Close event listeners.
        const resOrExc = format_1.safeParse(response);
        if (format_1.validate('Either', resOrExc)) {
            if ('Left' in resOrExc) {
                const exc = resOrExc.Left;
                if (format_1.validate('RpcClientException', exc)) {
                    reject(readableException(exc));
                }
            }
            else {
                const res = resOrExc.Right;
                if (format_1.validate(typeTRef, res)) {
                    resolve(res);
                }
            }
        }
        // Fall-through case. No-op if reject or resolve was already called.
        reject(unexpectedResponse);
        // Mark item as done processing.
        done();
    };
    return [handle, clean];
}
exports.makeDirectHandler = makeDirectHandler;
function makeStreamingHandler(bridgeClient, resolve, reject, typeTRef, id) {
    const [push, close, stream] = streams_1.heldPushStream();
    const clean = makeInterruptListener(bridgeClient, reject, id);
    const handle = (response, done) => {
        let validated = false;
        const resOrExc = format_1.safeParse(response);
        if (format_1.validate('Either', resOrExc)) {
            if ('Left' in resOrExc) {
                const exc = resOrExc.Left;
                if (format_1.validate('RpcClientException', exc)) {
                    throw new Error(readableException(exc));
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
                        close();
                        clean();
                        validated = true;
                    }
                }
            }
        }
        // Fall-through case.
        if (!validated) {
            throw new Error(unexpectedResponse);
        }
        // Mark item as done processing.
        done();
    };
    resolve(stream);
    return [handle, clean];
}
exports.makeStreamingHandler = makeStreamingHandler;
function makeRequestOfAuth(token) {
    return (route, request) => {
        const id = UUIDV4();
        const reqText = JSON.stringify(request);
        const headers = { format: 'JSON', token };
        const requestMessage = { id, route, reqText, headers };
        return [id, JSON.stringify(requestMessage)];
    };
}
exports.makeRequestOfAuth = makeRequestOfAuth;
// T is request type.
// U is response type.
function call(bridgeClient, makeRequest, makeResultHandler, 
// ^ Returns [handle, clean], where clean closes event listeners on termination of this call.
route, typeURef, request) {
    const { responseQueues, socketClient } = bridgeClient;
    const [id, requestMessage] = makeRequest(route, request);
    return new Promise((resolve, reject) => {
        const [handle, clean] = makeResultHandler(bridgeClient, resolve, reject, typeURef, id);
        responseQueues.set(id, new Queue(handle));
        socketClient.send(requestMessage, (error) => {
            if (error) {
                clean(); // Close event listeners.
                reject(failedRequest);
            }
        });
    });
}
exports.call = call;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFDO0FBQ3JDLGtDQUFpQztBQVlqQyx1Q0FBa0Q7QUFDbEQscUNBQThDO0FBVzlDLE1BQU0sYUFBYSxHQUFXLHdCQUF3QixDQUFBO0FBQ3RELE1BQU0sZUFBZSxHQUFXLGdDQUFnQyxDQUFBO0FBQ2hFLE1BQU0sZUFBZSxHQUFXLGlDQUFpQyxDQUFBO0FBQ2pFLE1BQU0sa0JBQWtCLEdBQVcsaUNBQWlDLENBQUE7QUFFcEUsU0FBUyxpQkFBaUIsQ0FBRSxHQUF1QjtJQUNqRCxJQUFJLGlCQUFRLENBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sb0JBQW9CLENBQUE7S0FDNUI7U0FBTSxjQUFjLENBQUM7UUFDcEIsT0FBTyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUN0QztBQUNILENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFFLE1BQWM7SUFLM0MsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDbEMsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLFlBQVksQ0FBQTtRQUN2QyxPQUFPLEdBQUcsRUFBRTtZQUNWLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUE7QUFFOUQsZ0NBQWdDO0FBQ2hDLFNBQVMscUJBQXFCLENBQzVCLFlBQTRCLEVBQzVCLE1BQWlDLEVBQ2pDLEVBQXFCO0lB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