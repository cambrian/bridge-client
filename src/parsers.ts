// If this errors, the below functions may require updating.
type Version = V517592

export function safeParse (x: any): any | undefined {
  try {
    return JSON.parse(x)
  } catch {
    return undefined
  }
}

export function isResponseMessage (x: any): x is ResponseMessage {
  try { return x.requestId && x.resText } catch { return false }
}

function isRpcClientException (x: any): x is RpcClientException {
  try { return x.tag === 'BadAuth' || x.tag === 'BadCall' } catch { return false }
}

function isResultItem<T> (x: any): x is ResultItem<T> {
  try { return x.tag === 'Result' || x.tag === 'EndOfResults' } catch { return false }
}

export function isResOrExc<T> (x: any): x is Either<RpcClientException, ResultItem<T>> {
  try {
    return ((x.Left && isRpcClientException(x.Left)) || (x.Right && isResultItem<T>(x.Right)))
  } catch { return false }
}
