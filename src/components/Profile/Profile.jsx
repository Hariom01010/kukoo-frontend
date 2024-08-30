import React from 'react'
import { jwtDecode } from "jwt-decode"

function Profile() {

    const tokenObject = document.cookie.split("; ").reduce((cookies,item)=>{
        const [key,value] = item.split("=")
        cookies[key] = value
        return cookies
      },{})
    
    const user = jwtDecode(tokenObject.refreshToken)

    return (
        <div>
            <div></div>
            <div>{user.fname}</div>
        </div>
    )
}

export default Profile
