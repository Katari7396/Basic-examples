import React, { useEffect, useState } from 'react'

function Useeffect3() {
    const [color,setColor] = useState('')

    useEffect(()=>{
        document.body.style.backgroundColor = color
    },[color])

  return (
    <div>

      <h3>The Color is {color}</h3>

      <button onClick={()=>setColor('lightgreen')}>Green</button>

      <button onClick={()=>setColor('lightpink')}>Pink</button>

      <button onClick={()=>setColor('orangered')}>Red</button>

      <button onClick={()=>setColor('lightgrey')}>Grey</button>

    </div>
  )
}

export default Useeffect3
