import React from 'react'

import './AddColorButton.css'

export default function AddColorButton() {
  
  return (
    <button className='add-color-button'>
      <span className='add-color-button__icon'>+</span>
      <span className='add-color-button__text'>Add Color</span>
    </button>
  )
}