import React from 'react'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'
import ColorItem from '../components/ColorItem'

export default function GradientMenu() {
  
  return (
    <div className="gradientMenu__panel">
      <p className="gradientMenu__title">Gradient Generator</p>

      <div className="gradientMenu__options">
        <MenuOption label="Colors" flex>
          <ColorItem color="90E196" />
          <ColorItem color="5773F2" />
        </MenuOption>
      </div>
    </div>
  )
}