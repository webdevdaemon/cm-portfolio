import React, {Component} from 'react'
import PropTypes from 'prop-types'

import fetchPens from '../helpers/fetchPens'
import Codepen from './CodePen'

export default ({children}) => (
  <ol className="list-codepens">
    {children}
  </ol>
)
