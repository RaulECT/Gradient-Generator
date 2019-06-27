import React from 'react'

export default function GradientView( { children, width, height, colors, type, className, onClick } ) {
  const viewStyle = {}
  const _colors = colors || [ '90E196', '5773F2' ]
  const viewClass = className || ''
  const _onClick = onClick ? onClick : () => {}
  
  viewStyle.width = width
  viewStyle.height = height
  viewStyle.backgroundImage = generateGradientByType( type, _colors )

  function generateGradientByType( type, colors ) {
    switch ( type ) {
      case 'diagonal': return `linear-gradient(to bottom right, #${colors[0]}, #${colors[1]})`
      case 'vertical': return `linear-gradient(to right, #${colors[0]}, #${colors[1]})`
      case 'circular': return `radial-gradient(circle at top, #${colors[0]}, #${colors[1]})`
      case 'horizontal': return `linear-gradient(#${colors[0]}, #${colors[1]})`
    
      default: return `linear-gradient(#${colors[0]}, #${colors[1]})`
    }
  }

  return (
    <div 
      style={ viewStyle }
      className={viewClass}
      onClick={ _onClick }
    >
      { children ? children : null }
    </div>
  )

}