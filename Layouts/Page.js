import React, {Component} from 'react'
import Head from '../Components/Head'
import Content from '../Components/Content'
import 'babel-polyfill'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {children, pageStyles, pageClassName, pageTitle} = this.props
    return (
      <div className={`page ${pageClassName}`}>
        <Head styleTag={pageStyles}/>
        <Content pageTitle={pageTitle} className='content'>
          {children}
        </Content>
      </div>
    )
  }
}

export default Page
