// const asyncErr = promise =>

/**
 * use this function to bypass the need for wrapping [await] assignments inside of async functions with a try/catch sequence.
 * @param  {promise} promise any async request for data that returns a promise
 * @return {object} object with 2 properties `{ok, data/error}`. check {ok} for truthiness, if true, the response will be assigned to {data}, if untrue, see {error} to view the error object.
*/
export default
  promise => promise.then(
    r => ({ok: true, data: r.data})
  ).catch(
    error => ({ok: false, error})
  )

// const a = asyncErr(axios('http://cpv2api.com/collection/XvKdxQ'))
// a
// export default asyncErr
