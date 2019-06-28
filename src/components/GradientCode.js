import React from 'react'

import './GradientCode.css'

export default function GradientCode( { code } ) {
  const codeString = 
    `.div {
      background: ${ code };
    }`
    
  return (
    <div className="gradient-code">
      <p> { codeString } </p>
    </div>
  )
}