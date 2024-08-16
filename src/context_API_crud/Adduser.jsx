import React, { useState } from "react";
import { customContext } from "./Index";

const AddUser = () => {
    const {addUser} = customContext();
    const [user , setuser] =useState();

    const handleSubmit = () =>{
        addUser(user);
        setuser('')
    }
  return (
  <>
    <div>AddUser</div>
   <form onSubmit={handleSubmit}>
   <input type="text" 
    value={user}
    onChange={(e)=> setuser(e.target.value)} />
    <button type='submit' >Adduser</button>
   </form>
  </>
  )
}

export default AddUser