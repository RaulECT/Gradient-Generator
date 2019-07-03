import React from 'react'
import ColorItem from './ColorItem'

export default function CurrentColorList( { colors, onClick } ) {
  
  return colors.map( (color, index) => < ColorItem onClick={ e => onClick( e, index ) } key={index} color={color} /> )
}