import React from 'react'

export default function DeleteButton( { onDelete, render } ) {
  const button = (
    <div 
      onClick={ onDelete } 
      className='color-item__delete-buton'
    >
      <span className='color-item__delete-icon' />
    </div>
  )

  return render ? button : null
}