import Link from 'next/link'
import PropTypes from 'prop-types'

import routeList from '../helpers/routeList'

const defStyles = {
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    display: 'block',
    fontSize: '3vh',
    marginRight: 15,
    fontFamily: 'hasklig, monaco, inconsolata, monospace',
    letterSpacing: '-1px',
    wordWrap: 'nowrap',
  },
}

const Nav = () => (
  <div className="nav" style={defStyles.nav}>
    { routeList.map((obj, dex) => (
      <Link href={obj.path} key={`${dex}`}>
        <a style={defStyles.link} id={obj.cssID}>{obj.title}</a>
      </Link>))  }
  </div>
)

export default Nav
