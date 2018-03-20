// import axios from 'axios'
// import checkAsync from './checkAsync'
//
// const checkAsync = prom =>
//   prom
//     .then(response => ({ ok: true, data: response.data }))
//     .catch(err => ({ ok: false, err }))
//
// const fetchPens = function(queryStr, pgNum = null) {
//   let urlStr = `${ queryStr }${ pgNum !== null ? '?page=' + pgNum : '' }`
//
//   return checkAsync(axios(urlStr))
//   .then(data => [...data.data.data])
// }
//
// export default fetchPens
