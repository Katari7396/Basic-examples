import React from 'react'

function Child3 ({userList}) {
  return (
    <div>
      <h2>USER LIST : </h2>

      {userList.map((user,id)=>(
        <ul key={id}>{user.name} - {user.age} YEARS OLD
        </ul>
      ))}
    </div>
  )
}

export default Child3
