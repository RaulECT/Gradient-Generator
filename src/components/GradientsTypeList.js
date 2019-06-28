import React from 'react'
import GradientView from './GradientView'

export default function GradientsTypeList( { types, onClick, colors } ) {
  const _types = types || []
  const _onClick = onClick ? onClick : () => {}

  return _types.map( (type, index) => 
    <GradientView 
      key={`gv_${index}`} 
      width='8rem' 
      height='8rem' 
      className='gradientMenu__preview' 
      onClick={ _onClick } 
      type={ type }
      colors={ colors }
    /> )
}