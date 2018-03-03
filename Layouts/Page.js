import React from 'react'
import Head from '../Components/Head'
import Content from '../Components/Content'
import 'babel-polyfill'


const Page = ({children, pageStyles, pageClassName}) => {
  return (
    <div className={`page ${pageClassName}`}>
      <Head styleTag={pageStyles}/>
      <Content pageTitle={pageClassName}>
        {children}
      </Content>
    </div>
  )
}

export default Page
