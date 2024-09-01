import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { setIsAuthenticated } from '../../../store/Slice/tokenSlice'
import axios from 'axios'


function ProtectedRoute({children}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.isAuthenticate.value)

    console.log('Authentication Slice state: ',isAuthenticated)


    useEffect(()=>{
        const authorizationHandler = async()=>{
            try{
                const response = await axios.get("http://localhost:5000/api/v1/user/getToken",{
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${isAuthenticated[1]}`
                    }
                })    
                if(response.data.newAccessToken){
                    dispatch(setIsAuthenticated(response.data.newAccessToken))
                }

            }catch(error){
                console.log('error: ',error)
                if(error.response.status == 401){
                    navigate('/login')
                }
            } 
        }
        authorizationHandler()
    },[])

    
    return (
        <div>
            {isAuthenticated[0] == true ? (children) : null}
        </div>
    )
}

export default ProtectedRoute
