import React from 'react'
import Page from '../Layouts/Page'

import ListCodePensWrapper from '../Containers/ListCodePensWrapper'

const styles = {}

export default () => (
  <Page rootStyles={styles} pageClassName='projects' pageTitle='viewProjects'>
    <ListCodePensWrapper />
  </Page>
)
