import React, { useState } from 'react'

function On() {

    const [isON, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isON)
    }

  return (
    <div>
      <h1>{isON ? 'THE LIGHT IS ON' : 'THE LIGHT IS OFF'}</h1>

      <button onClick={handleToggle}>Toggle Light</button>

    </div>
  )
}

export default On
