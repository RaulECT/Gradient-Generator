import React from 'react'

import './MenuOptions.css'

export default function MenuOption( { children, label } ) {
  
  return (
    <div>
      <p className="menu-option__label">{label}:</p>

      <div>
        { children ? children : null }
      </div>
    </div>
  )
}