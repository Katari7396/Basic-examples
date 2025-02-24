import React from 'react'
import Grand from './props3'

function Child(props) {
  return (
    <div>
      <Grand user= {props.user}/>
    </div>
  )
}

export default Child
