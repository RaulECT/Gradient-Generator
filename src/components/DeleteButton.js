import React from 'react'

export default function DeleteButton( { onDelete } ) {
  return (
    <div 
      onClick={ onDelete } 
      className='color-item__delete-buton'
    >
      <span className='color-item__delete-icon' />
    </div>
  )
}