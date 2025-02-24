import React, { useState } from 'react'

function Count() {

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    };

    const decrement = () => {
        setCount(count-1)
    };

    const reset = () => {
        setCount(0)
    };

  return (
    <div>
      <h2>CURRENT COUNT : {count} ⏲️</h2>

      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>

    </div>
  )
}

export default Count;
