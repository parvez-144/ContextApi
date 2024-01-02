import React from "react";
import { useState } from "react";
import userContext from "./userContext";

const userContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    return(
        <userContextProvider value={{user,setUser}}>
              {/* {children} */}
        </userContextProvider>
    )
}
export default userContextProvider