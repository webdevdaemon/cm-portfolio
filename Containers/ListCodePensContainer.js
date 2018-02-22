import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getPens from '../helpers/getPens'


class ListCodepensContainer extends Component {

  state = {
    url: 'http://cpv2api.com/collection/XvKdxQ',
    pens: [],
    isLoading: false,
  }

  static propTypes = {
    slug: PropTypes.string,
    defaultTabs: PropTypes.string,
    customtitle: PropTypes.string,
  }

  static defaultProps = {

  }

  componentDidMount() {
    this.setState((prevState, props) => ({

    }))

  }

  render() {
    return (
      <div>MyComponent</div>
    )
  }

}

export default ListCodepensContainer
