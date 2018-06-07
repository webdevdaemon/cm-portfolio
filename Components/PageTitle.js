import React from 'react'
import propTypes from 'prop-types'

const styles = {
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '1rem',
    width: '100%',

  },
  title: {
    fontFamily: 'Exo 2, Helvetica, sans-serif',
    fontSize: '2.8rem',
    fontWeight: 700,
    lineHeight: 1.1,
    margin: '0 auto',
    textAlign: 'center',
    width: '100%',
  },
  subTitle: {
    display: 'block',
    fontFamily: 'Exo, Helvetica, sans-serif',
    fontSize: '1.4rem',
    fontStyle: 'italic',
    fontWeight: 200,
    lineHeight: 1.1,
    margin: '0 auto',
    padding: '1rem 0',
    textAlign: 'center',
    width: '100%',
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
