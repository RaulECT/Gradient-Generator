import React from 'react'

import './GradientMenu.css'
import MenuOption from '../components/MenuOption'

export default function GradientMenu() {
  
  return (
    <div className="gradientMenu__panel">
      <p className="gradientMenu__title">Gradient Generator</p>

      <div className="gradientMenu__options">
        <MenuOption label="Colors">
          content here
        </MenuOption>
      </div>
    </div>
  )
}