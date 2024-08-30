import React from 'react'
import { jwtDecode } from 'jwt-decode'


function ProfilePage() {

  const tokenObject = document.cookie.split("; ").reduce((cookies,item)=>{
    const [key,value] = item.split("=")
    cookies[key] = value
    console.log(cookies)
    return cookies
  },{})
  console.log(tokenObject)
  // const user = jwtDecode(tokenObject.refreshToken)

  return (
    <div>
      <p>Name</p>

    </div>
  )
}

export default ProfilePage
