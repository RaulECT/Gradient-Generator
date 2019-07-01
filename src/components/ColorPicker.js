import React from 'react'
import { ChromePicker } from 'react-color'

import './ColorPicker.css'

export default function ColorPicker( { add, onChangeColor, onAddNewColor, buttonRef, position } ) {
  const isAddPicker = add || false
  let colorSelected = {}
  const _onChangeColor = onChangeColor || handelOnChangeColor 
  const _onAddNewColor = onAddNewColor ? onAddNewColor : c => {}
  const addButton = isAddPicker ? <button onClick={ handleOnAddNewColor } className='color-picker__add-button'>Add new color</button> : null
  const pickerStyle = { ...position }
 
  function handelOnChangeColor( newColor ) { colorSelected = newColor }

  function handleOnAddNewColor() { _onAddNewColor( colorSelected ) }

  return (
    <div 
      className='color-picker'
      style={ pickerStyle }
    >
      <ChromePicker onChange={ _onChangeColor } />
      {addButton}
    </div>
  )
}