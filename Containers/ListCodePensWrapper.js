import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCodepens from '../Components/ListCodepens'
import { isArray } from 'util'


const SCRIPT_SRC = 'https://production-assets.codepen.io/assets/embed/ei.js'
const URL = 'http://cpv2api.com/collection/XvKdxQ'

const defStyles = {}

class ListCodepensWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pens: this.props.pens
    }
    console.log({props: this.props})
  }

  componentDidMount() {
    this._mounted = true
    // console.log(this._mounted)
    //
    // axios.get(URL)
    // .then(res => {
    //   console.log(res.data.data)
    //   return res.data.data
    // })
    // .then(pens => this.setState({pens}))
    // .catch(e => new Error(e))
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = 1
    document.body.appendChild(script)
  }

  componentWillUnmount() {
    this._mounted = false
    console.log(this._mounted)
  }

  render() {
    return (
      <div className="list-codepens-wrapper">
        <ListCodepens
          pens={this.props.pens}
        />
      </div>
    )
  }
}

export default ListCodepensWrapper
