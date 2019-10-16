import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import AddNewFriend from './AddNewFriend';
import Friend from './Friend';

const FriendsList = () => {
  const [friends, setFriends] = useState([])

  const update= () => {
    axiosWithAuth()
    .get("/friends")
    .then(res => setFriends(res.data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    update()
  })



  return(
    <>
      <AddNewFriend  handler={update}/>
      <h1>Friend List!</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friend friendInfo={friend} />
        </div>
      ))}
    </>
  )

}

export default FriendsList;