import React, {Component} from 'react'

import Page from '../Layouts/Page'

export default class extends Component {
  render() {
    return (
      <Page pageClassName='about' pageTitle='whoami???'>
        <h2>WHOAMI</h2>
        <p>
          { `I get it... You're probably asking yourself,
            \n
            "WTF is a webDevDaemon?"
            \n
            Which is an reasonable question to ask in this context.
            \n
            Since I happen to know everything there is to know about me,
            I volunteered to (painstakingly) compose answers to every relevant
            'WHO?', 'WHAT?', 'WHERE?', 'WHEN?', 'WHY?' and 'HOW?' that you may have,
            and then listed them below for you to intillectually imbibe.
            \n
            ENJOY!!!` }
        </p>
      </Page>
    )
  }
}
