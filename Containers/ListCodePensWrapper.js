//@flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCodepens from '../Components/ListCodepens'
import Codepen from '../Components/CodePen'

import fetchPens from '../helpers/fetchPens'

const defStyles = {}

class ListCodepensWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'http://cpv2api.com/collection/XvKdxQ',
      pens: [],
      isLoading: true,
      page: null,
    }
  }

  _populateList = array => array.map((obj, dex) => <div key={dex}>{obj}</div>)

  componentDidMount() {
    let list = this.setState(
      (prev, props) => ({
        isLoading: prev.pens.length ? false : true,
      }),
      () => {
        this.state.pens.length &&
          this.setState({
            isLoading: false,
          })
      },
    )
  }

  render() {
    const { pens, isLoading } = this.state
    return (
      <div className="list-codepens-wrapper">
        <ListCodepens>
          {!isLoading ? (
            this._populateList([...pens])
          ) : (
            <p style={defStyles}>{'LOADING PENS...'}</p>
          )}
        </ListCodepens>
      </div>
    )
  }
}

export default ListCodepensWrapper
