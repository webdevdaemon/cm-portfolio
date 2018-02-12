import React from 'react'

import Link from 'next/link'

const linkStyle = {marginRight: 15}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Homepage</a>
    </Link>
    <Link href="/hiring-info">
      <a style={linkStyle}>Hiring Info</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Portfolio</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About Me...</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact Me</a>
    </Link>
  </div>
)

export default Header
