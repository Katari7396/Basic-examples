import React from 'react'
import Component2 from './component2'

function Component1() {

    const userName = 'KATARI'

  return (
    <div>

        <h1>WELCOME TOO MY WEBPAGE</h1>
        
        <Component2 userName= {userName}/>

    </div>
  )
}

export default Component1