import React, { useState } from "react";
import { customContext } from "./Index";

const UserList = () => {
    const {users, removeUser,updateUser } = customContext();
    const [editUser , seteditUser] = useState();
    const [newName, setnewName] = useState();

    const handleUser = () =>{
        updateUser(id ,newName );
        seteditUser(null);
        setnewName('')
    }
  return (
    <>
    <div>UsersList</div>

    <ul>
        {users.map((user)=>(
            <li key={user.id} >
                {editUser === user.id ?(
                   <> <input type="text"
                   value={newName}
                   placeholder="Enter your name"
                   onChange={(e)=> setnewName(e.target.value)}
                  />
                  <button onClick={()=> handleUser(user.id)}  >update</button></>
                ):(
                   <>
                   {user.name}&nbsp;&nbsp;&nbsp;
                    <button onClick={()=> removeUser(user.id)}  >Delete</button>
                    <button onClick={()=> setEdit(user.id)}  >Edit</button></>
                )}
            </li>
        ))}
    </ul>
   </>
  )
}

export default UserList