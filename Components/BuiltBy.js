import React, {PropTypes} from 'react'

const styles = {
  div: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  span: {
    display: 'inline-block',
    fontSize: '2vmin',
  },
}

const BuiltBy = props => (
  <div style={styles.div} className='built-by'>
    <span style={styles.span}>
      Built with
      <b><em>React.js</em></b>
    </span>
    <span style={styles.span}>
      Rendered Server-Side with
      <em> Next.js</em>
    </span>
    <span style={styles.span}>
      & coded with LOVE by Charles M.
    </span>
  </div>
)

export default BuiltBy
