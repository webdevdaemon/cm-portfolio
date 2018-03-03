import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const defStyles = {
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    fontSize: '3vmin',
    marginRight: 15,
    // fontFamily: 'Federo, avenir, system font',
    fontFamily: 'hasklig, monaco, inconsolata, monospace',
    letterSpacing: '-2px',
    wordWrap: 'nowrap',
  },
}

const routeList = [
  {path: '/', title: 'homePage'},
  {path: '/hire', title: 'hireMe'},
  {path: '/projects', title: 'viewProjects'},
  {path: '/about', title: 'aboutMe'},
  {path: '/contact', title: 'contactMe'},
]

const Nav = props => (
  <div className="nav" style={defStyles.nav}>
    { routeList.map((obj, dex) => (
      <Link href={obj.path} id={`embed-${dex}`} className='nav-link'>
        <a style={defStyles.link}>{obj.title}</a>
      </Link>
    ) ) }
  </div>
)

export default Nav
