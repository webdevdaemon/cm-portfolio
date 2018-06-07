import React from 'react'
import PropTypes from 'prop-types'


class HoverLink extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
    }
  }

  mouseEnter = () => {
    this.setState({
      title: `${this.state.title}("go")`
    })
  }

  mouseLeave = () => {
    this.setState({
      title: this.state.title,
    })
  }

  render() {
    const {title, id} = this.props
    return (
      <a
        id={id}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >{title}</a>)
  }
}

HoverLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}

export default HoverLink
