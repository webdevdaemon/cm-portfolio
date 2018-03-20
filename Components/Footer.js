import React from 'react'
import Link from 'next/link'

import Nav from '../Components/Nav'
import BuiltBy from '../Components/BuiltBy'

const defStyles = {
  link: {
    fontSize: '2.5vmin',
    marginRight: 15,
    fontFamily: 'Federant, Federo, avenir, system font',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
}

const Footer = props => (
  <div className="footer">
    <Nav />
    <BuiltBy />
  </div>
)

export default Footer
