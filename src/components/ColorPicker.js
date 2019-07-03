import React from 'react'
import { ChromePicker } from 'react-color'

import './ColorPicker.css'

export default function ColorPicker( { add, onChangeColor, onAddNewColor, buttonRef, position, color } ) {
  const isAddPicker = add || false
  let colorSelected = '#fff'
  const _onChangeColor = add ? handelOnChangeColor : onChangeColor 
  const _onAddNewColor = onAddNewColor ? onAddNewColor : c => {}
  const addButton = isAddPicker ? <button onClick={ handleOnAddNewColor } className='color-picker__add-button'>Add new color</button> : null
  const pickerStyle = { ...position }
  const _color = add ? colorSelected : color

  function handelOnChangeColor( newColor ) { colorSelected = newColor.hex }

  function handleOnAddNewColor() { _onAddNewColor( colorSelected ) }

  return (
    <div 
      className='color-picker'
      style={ pickerStyle }
    >
      <ChromePicker 
        onChange={ _onChangeColor } 
        color={_color}
      />
      {addButton}
    </div>
  )
}