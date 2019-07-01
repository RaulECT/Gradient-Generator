import React, { useRef } from 'react'

import './AddColorButton.css'

export default function AddColorButton( { onClick } ) {
  const _ref = useRef( null )

  return (
    <button 
      ref={_ref} 
      className='add-color-button'
      id='addColorButton'
      onClick={ () => {onClick(_ref)} }
    >
      <span className='add-color-button__icon'>+</span>
      <span className='add-color-button__text'>Add Color</span>
    </button>
  )
}