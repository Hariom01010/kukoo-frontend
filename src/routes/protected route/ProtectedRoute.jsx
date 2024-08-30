import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { setIsAuthenticated } from '../../../store/Slice/tokenSlice'
import axios from 'axios'


function ProtectedRoute({children}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(document.cookie.includes("accessToken")){
        dispatch(setIsAuthenticated(true))
    }else{
        if(document.cookie.includes("refreshToken")){
            axios.get("http://localhost:5000/api/v1/user/getToken",{
                withCredentials:true
            })
            .then((result)=>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            navigate("/login")
        }
    }
    const isAuthenticated = useSelector((state) => state.isAuthenticate.value)
    console.log(isAuthenticated)
    
    return (
        <div>
            {isAuthenticated ? (children) : (<Navigate to="/login" />)}
        </div>
    )
}

export default ProtectedRoute
