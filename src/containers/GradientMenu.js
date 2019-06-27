import React from 'react'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'
import GradientCode from '../components/GradientCode'
import AddColorButton from '../components/AddColorButton'
import CurrentColorsList from '../components/CurrentColorsList'
import GradientsTypeList from '../components/GradientsTypeList'

export default function GradientMenu( { currentColors, onChangeColors, onChangeGradientType, gradientsType } ) {
  const _gradientsType = gradientsType || []

  return (
    <div className="gradientMenu__panel">
      <p className="gradientMenu__title">Gradient Generator</p>

      <div className="gradientMenu__options">
        <MenuOption 
          label="Colors" 
          flex
        >
          <CurrentColorsList colors={ currentColors } />
          <AddColorButton />
        </MenuOption>
        
        <MenuOption 
          label="Patterns" 
          flex
        >
          <GradientsTypeList 
            types={_gradientsType}
            onClick={ onChangeGradientType }
          />
        </MenuOption>

        <MenuOption label='Code'>
          <GradientCode />
        </MenuOption>
      </div>
    </div>
  )
}