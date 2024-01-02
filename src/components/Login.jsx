import React from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../context/userContext";
export default function Login(){
    const [username,setUsername]=useState('')
    const [password,setPasswrod]=useState('')
    const handleOnSubmit=(e)=>{
             e.preventDefault()
    }
    const {setUser}=useContext(userContext)
    return(
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }} placeholder="username" />
            <input type="text" value={password} onChange={(e)=>{
                setPasswrod(e.target.value)
            }} placeholder="password" />
            <button type="submit" onClick={handleOnSubmit}></button>
        </div>
    )
}
