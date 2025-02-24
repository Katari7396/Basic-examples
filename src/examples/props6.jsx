import React from 'react'
import Child3 from './props7';

function Parent3() {

    const user = [
        {id:1, name:'BUNNY', age:25},
        {id:2, name: 'SUNNY', age:27},
        {id:3, name:'SRINIVAS', age:48}
    ];

  return (
    <div>
      <Child3 userList={user}/>
    </div>
  )
}

export default Parent3
