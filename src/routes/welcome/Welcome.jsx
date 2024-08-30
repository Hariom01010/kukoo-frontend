import React, { useEffect } from 'react'
import "./welcome.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuthenticated } from '../../../store/Slice/tokenSlice'

function Welcome() {
  const dispatch = useDispatch()

  useEffect(()=>{
    if(document.cookie.includes("refreshToken")){
      dispatch(setIsAuthenticated())
      
    }
  },[])
  const isAuthenticated = useSelector(state=>state.isAuthenticate.value)
  return (
    <div>
      <div>
        <h1 className='text-center mt-52 text-5xl dancing'>Kukoo</h1>
        <h2 className='text-center my-5 text-2xl'>Meet the new gen messaging application</h2>
        <h3 className='text-center my-2 text-lg italic'>Connecting the World, Connecting Lives</h3>
      </div>
      <div className='flex justify-center my-10'>
        {isAuthenticated
          ?<Link to="/home"><div className='bg-blue-600 text-blue-50 mx-4 py-2 px-6 rounded-sm'>Go home</div></Link>
          :<div>
            <Link to="/login"><button className='bg-blue-600 text-blue-50 mx-4 py-2 px-6 rounded-sm hover:scale-110'>Log in</button></Link>
            <Link to="/signup"><button className='bg-blue-50 text-blue-600 mx-4 py-2 px-6 rounded-sm hover:scale-110'>Sign Up</button></Link>
          </div>
        }
      </div>
      <div></div>
    </div>
  )
}

export default Welcome
