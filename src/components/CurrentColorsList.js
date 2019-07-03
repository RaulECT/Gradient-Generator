import React from 'react'
import ColorItem from './ColorItem'

export default function CurrentColorList( { colors, onClick, onDelete } ) {
  
  return colors.map( (color, index) => < ColorItem onDelete={ onDelete } onClick={ e => onClick( e, index ) } key={index} color={color} /> )
}