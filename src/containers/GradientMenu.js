import React from 'react'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'
import ColorItem from '../components/ColorItem'
import GradientView from '../components/GradientView'
import GradientCode from '../components/GradientCode'

export default function GradientMenu() {
  
  return (
    <div className="gradientMenu__panel">
      <p className="gradientMenu__title">Gradient Generator</p>

      <div className="gradientMenu__options">
        <MenuOption 
          label="Colors" 
          flex
        >
          <ColorItem color="90E196" />
          <ColorItem color="5773F2" />
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