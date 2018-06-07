import React from 'react'
import Page from '../Layouts/Page'

const pageStyles = {

}

export default () => (
  <Page pageStyles={pageStyles} pageClassName='homepage' pageTitle='helloWorld'>
    <p>{`
      Who Charles Morgan is.
      What Charles Morgan Does.
      Where Charles Morgan is, was, and plans to be in the future.
      Why you need Charles Morgan.
      How you can get your very own Charles Morgan.
      `}</p>

  </Page>
)
