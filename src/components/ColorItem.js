import React, { useRef } from 'react'

import './ColorItem.css'

export default function ColorItem( { color, onClick, onDelete } ) {
  const previewStyle = { backgroundColor: `${color}` }
  const colorPrevRef = useRef( null )

  function handleDeleteIconPressed(e) {
    e.stopPropagation()
    onDelete( color )
  }

  return (
    <div className="color-item">
      <div 
        ref={ colorPrevRef }
        style={previewStyle} 
        className="color-item__color-preview"
        onClick={ () => { onClick( colorPrevRef ) } }
      >
        <div onClick={ handleDeleteIconPressed } className='color-item__delete-buton'>
          <span className='color-item__delete-icon' />
        </div>
      </div>

      <div className='color-item__hex-color'>
        <p>{color}</p>
      </div>
    </div>
  )
}