import React from 'react'

import PropTypes from 'prop-types'

const CodePen = ({listID, slug, defaultTabs, customTitle, height, user}) => (
  <div class="Codepen">
    <p
      data-height={height}
      data-theme-id="dark"
      data-slug-hash={slug}
      data-default-tab={defaultTabs}
      data-user={user}
      data-embed-version="2"
      data-pen-title={customTitle}
      class="codepen"
    >
      See the Pen
      <a href={`https://codepen.io/webdevdaemon/pen/${slug}/`}>{customTitle}</a>
      by Charles Morgan (<a href="https://codepen.io/webdevdaemon">
        @webdevdaemon
      </a>) on
      <a href="https://codepen.io">CodePen</a>.
    </p>
    <script
      async
      src="https://production-assets.codepen.io/assets/embed/ei.js"
    />
  </div>
)

CodePen.propTypes = {
  slug: PropTypes.string,
  defaultTabs: PropTypes.string,
  customtitle: PropTypes.string,
}
CodePen.defaultProps = {
  defaultTabs: 'result',
  customtitle: 'codepen.com',
  height: '30vmin',
  user: 'webdevdaemon',
}

export default CodePen
