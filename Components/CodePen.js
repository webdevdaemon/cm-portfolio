import PropTypes from 'prop-types'

const CodePen = props => (
  <li className="Codepen codepen-embed" penID={props.penID}>
    <p data-height={props.height}
      data-theme-id={props.themeID}
      data-slug-hash={props.slug}
      data-default-tab={props.defaultTabs}
      data-user={props.user}
      data-embed-version="2"
      data-pen-title={props.customTitle} >

      See the Pen
      <a href={`https://codepen.io/${props.user}/pen/${props.slug}`}>
        {props.customTitle}
      </a>
      by Charles Morgan
      (<a href={`https://codepen.io/${props.user}`}> @webdevdaemon </a>)
      on
      <a href="https://codepen.io">CodePen</a>
    </p>

    <script
      async
      src="https://production-assets.codepen.io/assets/embed/ei.js"
    />

  </li>
)

CodePen.propTypes = {
  penID: PropTypes.number,
  slug: PropTypes.string,
  defaultTabs: PropTypes.string,
  customtitle: PropTypes.string,
  themeID: PropTypes.string,
  height: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  user: PropTypes.string,
}

CodePen.defaultProps = {
  defaultTabs: 'result',
  customtitle: 'codepen.io',
  height: '650px',
  user: 'webdevdaemon',
  themeID: 'dark',
}

export default CodePen
