import React from 'react'

export default function GradientView( { children, width, height, colors, type, className, onClick } ) {
  const viewStyle = {}
  const _colors = colors || [ '#90E196', '#5773F2' ]
  const viewClass = className || ''
  const _onClick = onClick ? onClick : () => {}
  const gradientCode = generateGradientByType( type, _colors )
  
  viewStyle.width = width
  viewStyle.height = height
  viewStyle.backgroundImage = gradientCode

  function generateGradientByType( type, colors ) {
    const colorsString = colors.join( ', ' )

    switch ( type ) {
      case 'diagonal': return `linear-gradient(to bottom right, ${colorsString})`
      case 'vertical': return `linear-gradient(to right, ${colorsString})`
      case 'circular': return `radial-gradient(circle at top, ${colorsString})`
      case 'horizontal': return `linear-gradient(${colorsString})`
    
      default: return `linear-gradient(${colorsString})`
    }
  }

  return (
    <div 
      style={ viewStyle }
      className={viewClass}
      onClick={ () => { _onClick( type, gradientCode ) } }
    >
      { children ? children : null }
    </div>
  )

}