// import React from 'react'
// import Child1 from './props5'

// function Parent1() {

//     const animals = ['lion','tiger','monkey','duck']

//   return (
//     <div>
//       <Child1 animalList = {animals}/>
//     </div>
//   )
// }

// export default Parent1

import React from 'react'
import Child2 from './props5';

function Parent2() {

    const foods = ['SOUP','MAGGIE','FRIED RICE','BIRYANI','ICE CREAM'];

  return (
    <div>
        <Child2 foodList={foods}/>
    </div>
  )
}

export default Parent2


