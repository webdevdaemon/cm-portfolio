import axios from 'axios'
import asyncErr from './asyncErr'

const fetchPens = async function(qString, pgNumber) {
  const url = `${dataUrl}${arguments[1] ? '?page=' + pgNumber : ''}`
  const response = await asyncErr(axios(url))
  return response.ok ? response.data : response.error
}

const a = fetchPens('http://cpv2api.com/collection/XvKdxQ')
console.log('fetchPens.js:11 ::',{a})
export default fetchPens
