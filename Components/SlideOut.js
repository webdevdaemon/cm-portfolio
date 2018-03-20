import React, {Component, PropTypes} from 'react'

class SlidingNavbar extends Component {
  state = {
    visible: false,
  }

  render() {
    let {visible} = this.state
    let {children} = this.props
    return (
      <div
        className='sliding-navbar'
        id='slide-nav'
        visible={this.state.visible}
      >{children}</div>
    )
  }
}

SlidingNavbar.propTypes = {

}

export default SlidingNavbar
