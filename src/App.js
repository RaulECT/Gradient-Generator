import React, { useState } from 'react'

import GradientView from './components/GradientView'
import GradientMenu from './containers/GradientMenu'
import './App.css'

export default function App() {

  const [ currentColors, changeColors ] = useState( [ '90E196', '5773F2' ] )

  return (
    <GradientView
      width='100vw'
      height='100vh'
      type='diagonal'
      className='gradientView'
      colors={currentColors}
    >
      <GradientMenu
        currentColors={ currentColors }
        onChangeColors={ changeColors }
      />
    </GradientView>
  )
}