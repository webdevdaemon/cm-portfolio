import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import getPenList from '../helpers/getPenList'

import ListCodepens from '../Components/ListCodepens'
import { isArray } from 'util';


const SCRIPT_SRC = 'https://production-assets.codepen.io/assets/embed/ei.js'
const URL = 'http://cpv2api.com/collection/XvKdxQ'

const defStyles = {}

class ListCodepensWrapper extends Component {

  constructor() {
    super()
    this.state = {
      pens: []
    }
  }

  componentDidMount() {
    this._mounted = true
    console.log(this._mounted)

    axios.get(URL)
    .then(res => {
      console.log(res.data.data)
      return res.data.data
    })
    .then(pens => this.setState({pens}))
    .catch(e => new Error(e))
    
    console.log({ pens: this.state.pens })
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
          pens={this.state.pens}
        />
      </div>
    )
  }
}

export default ListCodepensWrapper
