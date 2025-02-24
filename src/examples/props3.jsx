import React from 'react'

function Grand(props) {
  return (
    <div>
      <h1>NAME : {props.user.name}</h1>
      <h1>AGE : {props.user.age}</h1>
    </div>
  )
}

export default Grand
