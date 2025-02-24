import React from 'react'
import Component3 from './component3'

function Component2 ({userName}) {
  return (
    <div>

        <p>Component 2</p>
        
        <Component3 userName={userName}/>

    </div>
  )
}

export default Component2
