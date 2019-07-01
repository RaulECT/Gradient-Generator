import React, { useRef, useState } from 'react'
import usePosition from '../hooks/usePosition'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'
import GradientCode from '../components/GradientCode'
import AddColorButton from '../components/AddColorButton'
import CurrentColorsList from '../components/CurrentColorsList'
import GradientsTypeList from '../components/GradientsTypeList'
import ColorPicker from '../components/ColorPicker'

export default function GradientMenu( { currentColors, onChangeColors, onChangeGradientType, gradientsType, gradientCode, onChangeGradientCode } ) {
  const addColorButton = useRef( null )
  const [ isPickerShowing, handlePickerShowing ] = useState( false )
  const [ elementClicked, updateElementeClicked ] = useState( null )
  const pickerPos = usePosition( elementClicked )

  const _gradientsType = gradientsType || []
  const colorPicker = isPickerShowing ? ( 
    <ColorPicker 
      onAddNewColor={ AddColor }
      buttonRef={ addColorButton }
      position={ pickerPos }
      add 
    /> ) : null

  function changeGradient( type, code ) {
    onChangeGradientCode( code )
    onChangeGradientType( type )
  }

  function AddColor(color) {
    console.log(color)
    onChangeColors( currentColors.concat( [ color.hex ] ) )
  }

  function handleOnAddColor( elementClicked ) {
    updateElementeClicked( elementClicked )
    handlePickerShowing( !isPickerShowing )
  }

  return (
    <div className="gradientMenu__panel">
      <p className="gradientMenu__title">Gradient Generator</p>

      <div className="gradientMenu__options">
        <MenuOption 
          label="Colors" 
          flex
        >
          <CurrentColorsList 
            colors={ currentColors }
            onClick={ handleOnAddColor } 
          />

          <AddColorButton 
            onClick= { handleOnAddColor }
          />
          { colorPicker }
        </MenuOption>

        <MenuOption 
          label="Patterns" 
          flex
        >
          <GradientsTypeList 
            types={_gradientsType}
            onClick={ changeGradient }
            colors={ currentColors }
          />
        </MenuOption>

        <MenuOption label='Code'>
          <GradientCode code={ gradientCode } />
        </MenuOption>
      </div>
    </div>
  )
}