import React, { useEffect, useState } from 'react'

function Useeffect1() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`The count is ${count}`)
    },[count]);

  return (
    <div>
      <h2>Cureent Count : {count} </h2>

      <button onClick={()=>setCount(count+1)}>Increment</button>

      <button onClick={()=>setCount(count-1)}>Decrement</button>

      <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )
}

export default Useeffect1
