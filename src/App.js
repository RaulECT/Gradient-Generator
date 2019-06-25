import React, {} from 'react'

import GradientView from './components/GradientView'
import GradientMenu from './containers/GradientMenu'
import './App.css'

export default function App() {
  
  return (
    <GradientView
      width='100vw'
      height='100vh'
      type='diagonal'
      className='gradientView'
    >
      <GradientMenu />
    </GradientView>
  )
}