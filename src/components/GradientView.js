import React from 'react'

export default function GradientView( { children, width, height, colors, type } ) {
  const viewStyle = {}
  const _colors = colors || [ '#90E196', '#5773F2' ]

  viewStyle.width = width
  viewStyle.height = height
  viewStyle.backgroundImage = generateGradientByType( type, _colors )

  function generateGradientByType( type, colors ) {
    switch ( type ) {
      case 'diagonal': return `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`
    
      default: return `linear-gradient(${colors[0]}, ${colors[1]})`
    }
  }

  return (
    <div style={ viewStyle }>
      { children ? children : null }
    </div>
  )

}