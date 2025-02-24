import React, { useEffect, useState } from 'react'

function Useeffect4() {

    const [count,setCount] = useState(0);

    const [name,setName] = useState('KATARI');

    useEffect(()=>{
        console.log(`Count is ${count} The Name is ${name}`)
    },[count,name]);


  return (
    <div>

      <h3>Count is : {count}</h3>

      <h3>NAME IS : {name}</h3>

      <button onClick={()=>setCount (count+1)}> Increase Count</button>

      <button onClick={()=>setName(name=== 'KATARI' ? 'BUNNY' : 'KATARI')}>Toggle Name</button>

    </div>
  )
}

export default Useeffect4
