import React from 'react'
import propTypes from 'prop-types'

const styles = {
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '4vh',
    width: '100%',
    lineHeight: 1.1,
    textAlign: 'center',
    fontWeight: 700,
    fontFamily: 'Exo 2, Helvetica, sans-serif'
  },
  subTitle: {
    display: 'block',
    fontSize: '2.5vh',
    width: '100%',
    lineHeight: 1.1,
    textAlign: 'center',
    fontWeight: 200,
    fontFamily: 'Exo, Helvetica, sans-serif',
    fontStyle: 'italic'
  }
}

const PageTitle = ({title, subTitle}) => (
  <div style={styles.titleWrapper}>
    <h2 style={styles.title}>
      {title}
    </h2>
    <p style={styles.subTitle}>
      {subTitle}
    </p>
  </div>
)

export default PageTitle
