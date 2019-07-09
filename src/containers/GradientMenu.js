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
  /**
   * MARK: Variables declaration
   */
  const addColorButton = useRef( null )
  const [ isPickerShowing, handlePickerShowing ] = useState( false )
  const [ elementClicked, updateElementeClicked ] = useState( null )
  const [ colorSelected, handleColorSelected ] = useState( null )
  const [ isAddButtonPressed, handleIsAddButtonPress ] = useState( false )
  const pickerPos = usePosition( elementClicked )

  const _gradientsType = gradientsType || []
  const colorPicker = isPickerShowing ? ( 
    <ColorPicker 
      onAddNewColor={ AddColor }
      buttonRef={ addColorButton }
      position={ pickerPos }
      add={ isAddButtonPressed }
      color={ currentColors[colorSelected] }
      onChangeColor={ handleOnEditColor }
    /> ) : null
  
  /**
   * MARK: Local functions declarations
   */
  
  function changeGradient( type, code ) {
    onChangeGradientCode( code )
    onChangeGradientType( type )
  }

  function AddColor(color) {
    handleIsAddButtonPress( false )
    handlePickerShowing( false )
    onChangeColors( currentColors.concat( [ color ] ) )
  }

  function handleOnAddColor( elementClicked, colorSelected = null, isAddBtnPress = false ) {
    handleIsAddButtonPress( isAddBtnPress )
    updateElementeClicked( elementClicked )
    handleColorSelected( colorSelected )
    handlePickerShowing( !isPickerShowing )
  }

  function handleOnEditColor( newColor ) {
    const colorsUpdated = [ ...currentColors ]
    
    colorsUpdated[ colorSelected ] = newColor.hex
    onChangeColors( colorsUpdated )
  }

  function deleteColor( colorSelected ) {
    const colorsUpdated = currentColors.filter( color => color !== colorSelected )

    onChangeColors( colorsUpdated )
  }

  /**
   * MARK: JSX component
   */
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
            onDelete={ deleteColor }
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