import React from 'react'
import Child from './props2'

function Parent() {
    const user = {name:"katari",age: 25}
  return (
    <div>
      <Child user={user}/>
    </div>
  )
}

export default Parent
