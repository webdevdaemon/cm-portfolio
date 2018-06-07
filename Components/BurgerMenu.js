import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


import { pushRotate as Menu } from 'react-burger-menu'
import Link from 'next/link'
import HoverLink from './HoverLink'

import routeList from '../helpers/routeList'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '3.6rem',
    height: '3.6rem',
    left: '50%',
    right: '50%',
    top: '0',
  },
  bmBurgerBars: {
    background: '#ffffff',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 0,
    left: '50%',
    right: '50%',
    zIndex: '1000',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#ffaa00',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#ffaa00',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  },
  bmLink: {
    display: 'block',
    width: '100%',
    height: '3rem',
  }
}

const linkStyles = {
  display: 'block',
  fontSize: '3rem',
  fontFamily: '"inconsolata", "menlo", "courier new", monospace',
}

const hoverHandlers = {
  inv: '(go)',
  enter(evt){

  },
  leave(evt){

  },
}

const BurgerMenu = () => (
  <Menu styles={styles}>
    <ol>
      {routeList.map(({path, cssID, title}) => (
        <li id={cssID} key={title} onMouseEnter={
          (e) => {console.log({E: e.target})}
        }>
          <Link
            href={path}
            key={title}
            style={linkStyles}
          >
            <a id={cssID}>{title}</a>
          </Link>
        </li>
      ))}
    </ol>
  </Menu>
)

export default BurgerMenu
