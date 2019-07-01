export default function usePosition( element ) {
  if ( element ) {
   
    const { offsetLeft, offsetTop, offsetWidth } = element.current
    // const rem = 16
    const left = offsetLeft + offsetWidth
    
    return { top: offsetTop, left }
  }

  return {}
}