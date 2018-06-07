import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import BurgerMenu from './BurgerMenu'

// <o
const mainStyles = {
  backgroundImage: `linear-gradient(
    to top,
    #accbee 0%,
    #e7f0fd 100%
  )`,
  height: '100%',
  width: '94%',
  minHeight: '97vh',
  minWidth: '320px',
  maxWidth: '960px',
  margin: '10px auto',
  overflow: 'hidden',
  padding: 0,
  border: '1px solid #777',
}

var styles = {

}

const bodyStyles = {

}

// <c

class Content extends Component {
  constructor() {
    super()
    this.state = {
      menuIsOpen: false,
    }
  }

  toggleMenu = o => {
    this.setState({menuIsOpen: !o})
  }

  render() {
    let {children, addStyles, headerProps, footerProps} = this.props
    return (
      <div id='outer-container'>
        <BurgerMenu
          right
          width={300}
          styles={styles}
          isOpen={this.state.menuIsOpen}
          toggleMenu={(() => this.toggleMenu(this.state.menuIsOpen))}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />

        <div id='page-wrap'
          style={Object.assign({}, mainStyles, addStyles)}>
          <Header {...headerProps}>
            <Nav />
          </Header>

          <div style={bodyStyles}>{children}</div>

          <Footer {...footerProps}>
            <Nav />
          </Footer>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  addStyles: PropTypes.object,
  headerProps: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    addStyles: PropTypes.object,
  }),
  footerProps: PropTypes.shape({
    addStyles: PropTypes.object,
  }),
}

export default Content
