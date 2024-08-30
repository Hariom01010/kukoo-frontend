import React from 'react'
import { User } from '../../../../server/models/Users.model'
import axios from 'axios'

function MainScreen({screen}) {

      axios.get("http://192.168.1.11:5000/api/v1/user/searchUser",{
        withCredentials: true
      }).then((result)=>{
        console.log(result)
      })
      

   
  return (
    <div>
      {screen == "friends"
      ?<div>friends</div>
      :<div>

        </div>}
    </div>
  )
}

export default MainScreen
