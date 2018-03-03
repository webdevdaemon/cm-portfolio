import React from 'react'
import Page from '../Layouts/Page'

import ListCodePensWrapper from '../Containers/ListCodePensWrapper'
// import ListCodepens from '../Components/ListCodepens'

// import fetchPens from '../helpers/fetchPens'

const styles = {}

export default () => (
  <Page rootStyles={styles} pageClassName='projectGallery'>
    <ListCodePensWrapper />
  </Page>
)
