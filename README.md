# bridge-client
A TypeScript module for interfacing with our Haskell-based backend.

## Installation
```bash
npm install https://github.com/1protocol/bridge-client --save
```
To use the demo, please find a pre-November commit.

## Usage
See `test/example.ts`. Note that users are responsible for opening a WebSocket connection and
passing a WebSocket-compatible object to `BridgeClient.make`. Consider using a reconnecting
WebSocket implementation, such as [this](https://github.com/pladaria/reconnecting-websocket) repo.

## Concept
Our back-end codebase relies on Haskell's type safety to prevent errors of all kinds. Naturally, we
want our front-end RPC callers to use the same types as our back-end RPC handlers. Since we're using
a different language (TypeScript) to build out the front-end, however, and since all data is
text-serialized when it goes over the network, we can't just copy our request and response types
from back-end to front-end.

Fortunately, Haskell magic lets us generate RPC functions and types for the TypeScript front-end to
use. This requires only some up-front work to create the right boilerplate. Now whenever the
back-end API changes, our RPC functions can be automatically re-generated from templates—with no
room for manual translation errors.

In more concrete terms, let's say that the back-end had the following API:
- Route `foo` from a `FooRequest` to a single `FooResponse`.
- Route `bar` from a `BarRequest` to a single `BarResponse`.
- Route `baz` from a `BazRequest` to streaming `BazResponse`.

After we generate this module, it will contain these three functions (roughly):
- `foo (webSocket: WebSocket, request: FooRequest): Promise<FooResponse>`
- `bar (webSocket: WebSocket, request: BarRequest): Promise<BarResponse>`
- `baz (webSocket: WebSocket, request: BazRequest): Stream<BazResponse>`

This module exports a namespace `Call` with our actual generated functions.
