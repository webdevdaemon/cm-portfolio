import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'


const defStyles = {
  backgroundImage: `linear-gradient(
    to top,
    #accbee 0%,
    #e7f0fd 100%
  )`,
  height: '100%',
  width: '95vw',
  minHeight: '95vh',
  minWidth: '320px',
  maxWidth: '960px',
  margin: '10px auto',
  padding: 20,
  border: '1px solid #777',
}

const Content = props => (
  <div style={
    Object.assign({}, defStyles, props.addStyles)
  }>
    <Header {...props.headerProps}>
      <Nav />
    </Header>
    <div>{props.children}</div>
    <Footer {...props.footerProps}>
      <Nav />
    </Footer>
  </div>
)

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
