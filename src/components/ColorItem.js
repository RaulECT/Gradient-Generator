import React from 'react'

import './ColorItem.css'

export default function ColorItem( { color } ) {
  const previewStyle = { backgroundColor: `${color}` }

  return (
    <div className="color-item">
      <div style={previewStyle} className="color-item__color-preview"></div>

      <div className='color-item__hex-color'>
        <p>{color}</p>
      </div>
    </div>
  )
}