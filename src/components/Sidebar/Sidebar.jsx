import React, {useState} from 'react'
import List from '../../components/List/List'
import { RxAvatar } from "react-icons/rx";
import Search from '../../components/Search/Search'
import { setMainScreenFriends, setMainScreenRequests } from '../../../store/Slice/screenSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const dispatch = useDispatch()

    const setFriendList = ()=>{
        dispatch(setMainScreenFriends())
    }
  
    const setfriendRequestList = ()=>{
        dispatch(setMainScreenRequests())
    }

  return (
    <div>
      <div className='bg-[#343434]'>
        <div className='flex justify-between mx-5 py-2'>
          <h1 className='text-2xl dancing my-1'>Kukoo</h1>
          <div className='flex items-center'>
            <Search />
            <RxAvatar size={40} />
          </div>
        </div>
        <div className='flex justify-evenly py-3 text-lg'>
          <div onClick={setFriendList}>Friends</div>
          <div onClick={setfriendRequestList}>Requests</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
