import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import getPens from '../helpers/getPens'

console.log(getPens('http://cpv2api.com/collections/finished/webdevdaemon'))

const ListCodepens = props => (
  <div className="list-codepens-wrap">
    <ol className="list codepens">
      {
        props.pens.map((item, index) => <li id={index}>{item.data}</li>)
      }
    </ol>
  </div>
)

export default ListCodepens
