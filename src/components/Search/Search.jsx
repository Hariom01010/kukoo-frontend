import React, { useEffect, useState } from 'react'
import axios from "axios"

function Search() {

  const [query,setQuery] = useState("")
  const [result, setResult] = useState([])
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  // Function to handle input value change
  const handleChange = (e)=>{
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  // Function to search for user in database
  async function searchUser(query){
    const result = await axios.get("http://192.168.1.11:5000/api/v1/user/searchUser", {
      params: {username:query},
      withCredentials: true
    })
    console.log(result.data)
    setResult(result.data)
  }

  // Sets the debounced query
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setDebouncedQuery(query)
    },500)

    return ()=>{
      clearTimeout(timeOut)
    }
  },[query])

  // Calls the searchUser function with debouncedQuery
  useEffect(()=>{
    if(debouncedQuery){
      searchUser(debouncedQuery)
    }
  },[debouncedQuery])


  const addFriend = ()=>{
    console.log("hell")
  }

  return (
    <div className='m-2'>
        <input type="text" className='py-1 px-2 bg-[#3e3e3e] rounded-lg outline-none w-[40vw]' placeholder='Search User'onChange={handleChange} onSubmit={searchUser}/>
        <div className='absolute right-16 w-[55vw] my-2'>
          {result.map((result)=>{
            console.log({result})
            return (
              <div className='flex justify-between bg-blue-600 px-2 pt-4 pb-2 rounded-sm'>
                <h1>{result.fname}</h1>
                <button onClick={addFriend}>+</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Search
