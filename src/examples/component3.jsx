import React from 'react'
import Component4 from './component4'

function Component3 ({userName}) {
  return (
    <div>

      <p>Component 3</p>

      <Component4 userName={userName}/>
      
    </div>
  )
}

export default Component3
