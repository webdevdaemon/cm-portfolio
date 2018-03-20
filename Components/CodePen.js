import PropTypes from 'prop-types'

class CodePen extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    return (
      <li className="Codepen codepen-embed" key={props.id} slug={props.link}>
        <p
          data-height={props.height}
          data-theme-id={props.themeID}
          data-slug-hash={props.slug}
          data-default-tab={props.defaultTabs}
          data-user={props.user}
          data-embed-version="2"
          data-pen-title={props.customTitle}
          preview={props.preview}>
          <span>{'See the Pen '}</span>
          <a href={props.link}>{props.customTitle}</a>
          <span>{'by '}</span>
          <a href={`https://codepen.io/${props.user}`}>{'webDevDaemon '}</a>
          <span>
            <i>{'(Charles M.) '}</i>
          </span>
          <span>{'on '}</span>
          <a href="https://codepen.io">{'CodePen'}</a>
        </p>
      </li>
    )
  }
}

CodePen.propTypes = {
  id: PropTypes.number,
  slug: PropTypes.string,
  defaultTabs: PropTypes.string,
  customtitle: PropTypes.string,
  themeID: PropTypes.string,
  height: PropTypes.string,
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
