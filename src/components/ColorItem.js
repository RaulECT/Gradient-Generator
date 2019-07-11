import React, { useRef } from 'react'
import DeleteButton from './DeleteButton'

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
        // onClick={ () => { onClick( colorPrevRef ) } }
      >
        <DeleteButton onDelete={ handleDeleteIconPressed } />
      </div>

      <div className='color-item__hex-color'>
        <p>{color}</p>
      </div>
    </div>
  )
}