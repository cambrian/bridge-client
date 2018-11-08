// Bad for browser: #!/usr/bin/env node
require('source-map-support').install()

export { BridgeClient } from './client'
export { Call, Server } from './generated/callers'
export * from './generated/types'
export * from './streams'

// IMPORTANT: If this line errors, you have new types.
// Perform the following steps to reconcile type versions:
// 1. Run ./types.sh from the root of the bridge-client repo.
// 2. Fix files as necessary based on the new generated types.
// 3. Fix the callers.ede template based on the new generated types.
// 4. Re-run the caller generation script from vest-hs and commit.
// 5. Change this type string to match the new types version.
export { V705328 } from './generated/types'
