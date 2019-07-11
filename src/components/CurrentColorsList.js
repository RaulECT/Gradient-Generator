import React, { useRef, createRef, useEffect } from 'react'
import ColorItem from './ColorItem'
import { useTrail, animated } from 'react-spring'

export default function CurrentColorList( { colors, onClick, onDelete } ) {
  let animatedColorsItemRef = useRef( [...Array(colors.length)].map( () => createRef() ) )
  const trail = useTrail( colors.length, {
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' }
  } )
  
  useEffect( () => {
    if ( animatedColorsItemRef.current.length >= 2 ) {
      animatedColorsItemRef.current.push( createRef() )
    }
  } )

  return trail.map( ( props, index ) => {
    const colorItem = (
      <ColorItem 
        onDelete={ onDelete } 
        onClick={ e => onClick( e, index ) } 
        key={'colorItem_'+index} 
        color={colors[index]} 
        buttonDelete={ colors.length > 2 }
      />
    )

    return (
      <animated.div
        key={ 'animatedCL_' + index }
        style={ { ...props, marginRight: '1rem' } }
        ref={ animatedColorsItemRef.current[ index ] }
        onClick={ () => { onClick( animatedColorsItemRef.current[ index ], index ) } }
      >
        { colorItem }
      </animated.div>
    )
  } )
}