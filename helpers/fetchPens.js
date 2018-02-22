import axios from 'axios'

/**
 * Fetches json data from codepen api when given a query (string) and an optional page number (number).
 * @param  {[string]} queryStr Http queryString - see 'http://cpv2api.com/' for further info.
 * @param  {[number]} pageNum Optional - for pagination of datasets where index >= 10.
 * @return {[json]} JSON data object.
 */

function fetchPens(queryStr, pageNum) {
  const pens = axios( `${queryStr}${
    [...arguments].length > 3 ? '?page=' + pageNum : ''
  }`)
    .then(response => response.json())
    .then(json => json && console.log({ json }))
    .then(data => [...data])
    .catch(err => console.log('ERROR\n_____\n_____\n', { err }))
}

export default fetchPens

// getAccountByUsername = username =>
//   axios(`${BASE_URL}/profile/${USER_NAME}`)
//
// getUserPensByTagName = (username, tagname) =>
//   axios(`${BASE_URL}/pens/public/${USER_NAME}?tag=${TAG_NAME}`)
//
// getCollectionsByUsername = username =>
//   axios(`${BASE_URL}/collections/public/${USER_NAME}`)
