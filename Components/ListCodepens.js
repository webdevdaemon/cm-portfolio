import PropTypes from 'prop-types'
import axios from 'axios'

function getUserAccount() {
  return axios.get('http://cpv2api.com/pens/popular')
}

function getUserPermissions() {
  return axios.get('/pens/public/webdevdaemon?tag=portfolio')
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    console.log('Both requests are now complete')
  }))

const getUserPensByTag = (tagString) => {
  axios('http://cpv2api.com/pens/popular').then((response) => {
    response.success && console.log(response.data)
  })
}

const ListCodepens = props => (
  <ol className="">
    {

    }
  </ol>
)

ListCodepens.propTypes = {
  slug: PropTypes.string,
  defaultTabs: PropTypes.string,
  customtitle: PropTypes.string,
}

export default ListCodepens
