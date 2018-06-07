import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Codepen from 'react-codepen-embed'

const ListCodepens = ({ pens }) => (
  <ol className="list-codepens">
    {console.log({pens})}
    {pens.map((pen, index) => (
      <Codepen
        user={pen.user.username}
        hash={pen.id}
        height={500}
        defaultTab="result"
        key={pen.id}
        className="codepen"
      />
    ))}
  </ol>
)

export default ListCodepens
