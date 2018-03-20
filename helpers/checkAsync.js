// /**
//  * use this function to bypass the need for wrapping [await] assignments inside of async functions with a try/catch sequence.
//  * @param  { promise } prom any async request for data that returns a promise
//  * @return { object } object with 2 properties `{ok, data/error}`. check {ok} for truthiness, if true, the response will be assigned to {data}, if untrue, see {error} to view the error object.
//  */
// const checkAsync = prom =>
//   prom
//     .then(response => ({
//       ok: true,
//       data: { response },
//     }))
//
//     .catch(err => ({
//       ok: false,
//       err,
//     }))
//
// export default checkAsync
