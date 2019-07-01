import React, { useRef } from 'react'

import './ColorItem.css'

export default function ColorItem( { color, onClick } ) {
  const previewStyle = { backgroundColor: `${color}` }
  const colorPrevRef = useRef( null )

  return (
    <div className="color-item">
      <div 
        ref={ colorPrevRef }
        style={previewStyle} 
        className="color-item__color-preview"
        onClick={ () => { onClick( colorPrevRef ) } }
      ></div>

      <div className='color-item__hex-color'>
        <p>{color}</p>
      </div>
    </div>
  )
}