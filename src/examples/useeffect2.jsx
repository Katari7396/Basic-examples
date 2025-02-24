import React, { useEffect, useState } from 'react'

function Useeffect2() {

    const [name,setName] = useState('');

    useEffect(()=>{
        console.log('component mounted')
    },[]);

  return (
    <div>
      <h2>Hello {name} 🙋‍♂️</h2>
      <button onClick={()=>setName('KATARI')}>click</button>
    </div>
  )
}

export default Useeffect2
