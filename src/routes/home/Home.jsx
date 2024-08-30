import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import MainScreen from '../../components/MainScreen/MainScreen'
import { useSelector } from 'react-redux'

function Home() {
  const screenType = useSelector((state)=>state.mainScreen.value)
  return (
    <div className='md:flex'>
      <Sidebar />
      <MainScreen screen={screenType}/>
    </div>
  )
}

export default Home
