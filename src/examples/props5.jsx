// import React from 'react'

// function Child1 ({animalList}) {
//   return (
//     <div>
//       <h1>ANIMAL LIST :</h1>
//       {animalList.map((animal,id)=>(
//         <ul key={id}>{animal}</ul>
//       ))}
//     </div>
//   )
// }

// export default Child1

import React from 'react'

function Child2 ({foodList}) {
  return (
    <div>
      <h1>FOOOD LIST 😋</h1>

      {foodList.map((food,index)=>(
        <ul key={index}>{food}</ul>
      ))}
    </div>
  )
}

export default Child2
