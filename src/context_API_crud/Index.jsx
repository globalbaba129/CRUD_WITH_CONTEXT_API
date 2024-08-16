import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const userContext = createContext();

const customContext = () => useContext(userContext);

const Index = ({ children }) => {
    const [users , setusers] = useState();

    const addUser = () => {
        setusers((user)=> [...user , {id:Date.now() , name}]);
    }

    const removeUser = (id) => {
        setusers(users.filter((user)=> user.id === id));
    }
const updateUser = (id , name) => {
    setusers(
        users.map((user)=>(
   user.id === id ? {...user, name: name} : user
        ))
    )
}

  return (
    <userContext.Provider value={{users, addUser, removeUser,updateUser }}>
    { children }
    </userContext.Provider>
  )
}

export  {Index, customContext}