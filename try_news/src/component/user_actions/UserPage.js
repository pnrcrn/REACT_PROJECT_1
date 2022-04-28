import React, { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import StreamCreate from "../streams/StreamCreate";
import Login from "./Login";



function UserPage() {
    const [user, setUser]=useState(null);

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
          if(authUser){
              setUser(authUser);
          }
          else{
              setUser(null);
          }
      })
  },[]);
  console.log(user);

  return (
    <div className="user">
        {user?<StreamCreate user={user}/>: <Login  ></Login>}
    </div>
  );
};

export default UserPage;