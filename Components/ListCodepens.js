import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Codepen from 'react-codepen-embed'

const ListCodepens = ({pens}) => (
  <ol className="list-codepens">
    { 
      pens.map((pen, index) => (
        <Codepen 
          user={pen.user.username}
          hash={pen.id}
          height={500}
          defaultTab='result' 
          key={index}
          className='codepen'
        />)
      )
    }
  </ol>
)

export default ListCodepens