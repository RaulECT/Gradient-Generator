import React from 'react'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'
import GradientView from '../components/GradientView'
import GradientCode from '../components/GradientCode'
import AddColorButton from '../components/AddColorButton'
import CurrentColorsList from '../components/CurrentColorsList'

export default function GradientMenu( { currentColors, onChangeColors } ) {
  
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
          <GradientView 
            width='8rem'
            height='8rem'
            type='diagonal'
            className='gradientMenu__preview'
          />
          
          <GradientView 
            width='8rem'
            height='8rem'
            className='gradientMenu__preview'
          />
          
          <GradientView 
            width='8rem'
            height='8rem'
            className='gradientMenu__preview'
            type='vertical'
          />
          
          <GradientView 
            width='8rem'
            height='8rem'
            className='gradientMenu__preview'
            type='circular'
          />
        </MenuOption>

        <MenuOption label='Code'>
          <GradientCode />
        </MenuOption>
      </div>
    </div>
  )
}