// import axios from 'axios'
//
// // const getPenList = axios('http://cpv2api.com/collection/XvKdxQ')   .then(r =>
// // {   console.log({r})   return r.data.data })   .then(data => [...data])
// // .catch((err) => {     console.log(e)     throw new Error('getPenList failure:
// // ' = err)   })
//
// const getPenList = async function(url) {
//     let res = await axios(url).then(res => res.data)
//     let penData = res.data
//     return Array.isArray(penData) ? penData : [...penData]
// }
//
// const a = getPenList('http://cpv2api.com/collection/XvKdxQ');
// a
// let ab = Array.isArray(a)
// ab
// export default getPenList
