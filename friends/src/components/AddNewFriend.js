import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

const AddNewFriend = (props) => {
  const [friendData, setFriendData] = useState({name:"", age:"", email:""})

  const handleChange = e => {
    setFriendData(
      {
        ...friendData,
        [e.target.name]: e.target.value
      }
    )
    props.handler();
  }

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friendData)
      .then(res => { 
        console.log(e.target)
        setFriendData(
          {
            ...friendData,
            name: "",
            age: "",
            email:""
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={friendData.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={friendData.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={friendData.email}
        placeholder="email"
        onChange={handleChange}
      />
      <button type="submit">Add New Friend!</button>
    </form>
  );
};

export default AddNewFriend;