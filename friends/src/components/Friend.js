import React from 'react'

const Friend = ({ friendInfo }) => {
  return (
    <div>
      <h2>{friendInfo.name}</h2>
      <p>Age: {friendInfo.age}</p>
      <p>email: {friendInfo.email}</p>
    </div>
  )
}

export default Friend;
