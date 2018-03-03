import React from 'react'

import PageTitle from './PageTitle'

const Header = ({children, title, subTitle, addStyles, ...props}) => (
  <div className='page-header'>
    {children}
    <PageTitle {...props}/>
  </div>
)

export default Header
