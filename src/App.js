import React, { useState } from 'react'

import GradientView from './components/GradientView'
import GradientMenu from './containers/GradientMenu'
import './App.css'

export default function App() {

  const [ currentColors, changeColors ] = useState( [ '90E196', '5773F2' ] )
  const [ gradientType, changeGradientType ] = useState( 'diagonal' )
  const [ gradientCode, changeGradientCode ] = useState( 'linear-gradient(#e66465, #9198e5)' )
  const gradientTypes = [ 'diagonal', 'horizontal', 'vertical', 'circular' ]

  return (
    <GradientView
      width='100vw'
      height='100vh'
      type={ gradientType }
      className='gradientView'
      colors={currentColors}
    >
      <GradientMenu
        currentColors={ currentColors }
        gradientCode={ gradientCode }
        onChangeColors={ changeColors }
        onChangeGradientType={ changeGradientType }
        onChangeGradientCode={ changeGradientCode }
        gradientsType={gradientTypes}
      />
    </GradientView>
  )
}