import React from 'react'
import ColorItem from './ColorItem'

export default function CurrentColorList( { colors } ) {
  
  return colors.map( (color, index) => < ColorItem key={index} color={color} /> )
}