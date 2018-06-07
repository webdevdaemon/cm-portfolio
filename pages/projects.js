import React from 'react'
import Page from '../Layouts/Page'
import 'isomorphic-fetch'
import axios from 'axios'

import ListCodePensWrapper from '../Containers/ListCodePensWrapper'

const pensUrl = 'http://cpv2api.com/collection/XvKdxQ'

const styles = {}

export default class extends React.Component {
  static async getInitialProps() {
      const res = await axios(pensUrl)
      console.log({res})
      const data = await res.data
        // .then(r => r.data)
        // .catch(err => console.log({err}))
      console.log({data})
      const pens = await data.data
      console.log({pens})
      return { pens }
    }



  render() {
    return (
      <Page
        rootStyles={styles}
        pageClassName='projects'
        pageTitle='viewProjects'
      >
        {console.log(this.props.data)}
        <ListCodePensWrapper pens={this.props.pens}/>
      </Page>
    )
  }
}
