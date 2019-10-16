import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import AddNewFriend from './AddNewFriend';
import Friend from './Friend';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
 

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
      <h1>Friend List</h1>
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={2000} //3 secs

      />
      {friends.map(friend => (
        <div key={friend.id}>
          <Friend friendInfo={friend} />
        </div>
      ))}
    </>
  )

}

export default FriendsList;