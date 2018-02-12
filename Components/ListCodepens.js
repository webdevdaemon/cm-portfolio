import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const BASE_URL = 'http://cpv2api.com',
  USER_NAME = 'webdevdaemon',
  TAG_NAME = 'portfolio'

class ListCodepens extends Component {
  state = {
    pens: [],
    isLoading: false,
  }

  static propTypes = {
    slug: PropTypes.string,
    defaultTabs: PropTypes.string,
    customtitle: PropTypes.string,
  }

  getAccountByUsername = username => axios(`${BASE_URL}/profile/${username}`)

  getUserPensByTagName = (username, tagname) =>
    axios(`${BASE_URL}/pens/public/${username}?tag=${tagname}`)

  getCollectionsByUsername = username =>
    axios(`${BASE_URL}/collections/public/${username}`)

  render() {
    return (
      <div className="list-codepens-wrap">
        <ol className="ListCodepens">{}</ol>
      </div>
    )
  }
}

// Get chriscoyier's ${'public'} collections

axios
  .all([
    getAccountByUsername(),
    getUserPensByTagName(),
    getCollectionsByUsername(),
  ])
  .then(
    axios.spread(function(acct, perms) {
      console.log('Both requests are now complete')
    }),
  )

export default ListCodepens
