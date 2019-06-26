import React from 'react'

import './GradientCode.css'

export default function GradientCode() {
  const code = 
    `.div {
      background: linear-gradient(#e66465, #9198e5);
    }`

  return (
    <div className="gradient-code">
      <p> { code } </p>
    </div>
  )
}