import React, { useState } from 'react'

function Click() {
    const [click,setClick] = useState(0)

    const handleClick = () => {
        setClick(click+1)
    };


  return (
    <div>
      <h2>CURRENT CLICK : {click}</h2>

      <button onClick={handleClick}>CLICK ME</button>
      
    </div>
  )
}

export default Click
