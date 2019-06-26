import React from 'react'

import './MenuOptions.css'

export default function MenuOption( { children, label, flex } ) {
  const viewStyle = flex ? { display: 'flex' } : {}

  return (
    <div className='menu-option'>
      <p className="menu-option__label">{label}:</p>

      <div style={ viewStyle }>
        { children ? children : null }
      </div>
    </div>
  )
}