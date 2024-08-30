import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function Signup() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data)=>{
    axios.post("http://localhost:5000/api/v1/user/signup",data).then(()=>{
      console.log("User created succesfully")
      navigate("/home")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='h-[100vh] overflow-hidden flex flex-col'>
      <Link to={"/"}><IoMdArrowBack size={30} className='m-5'/></Link>
      <div className='my-auto'>
        <div className='bg-blue-600 w-[80vw] mx-auto rounded-md md:w-[40vw] xl:w-[30vw]'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col p-5'>
              <p>Full Name</p>
              <input type="text" {...register("fname")} className='w-4/5 bg-transparent border-b-2 mb-12 outline-none'/>
              <p>Username</p>
              <input type="text" {...register("username")} className='w-4/5 bg-transparent border-b-2 mb-12 outline-none'/>
              <p>Email</p>
              <input type="email" {...register("email")} className='w-4/5 bg-transparent border-b-2 mb-12 outline-none'/>
              <p>Password</p>
              <input type="password" {...register("password")} className='w-4/5 bg-transparent border-b-2 mb-12 outline-none'/>
            </div>
            <button type='submit' className='w-4/5 bg-slate-50 text-blue-600 ml-5 mb-8 py-2 rounded-md hover:bg-slate-200 font-medium'>Sign Up</button>
            <p className='ml-5 pb-4'>Don't have an account? <Link to={"/login"} className='hover:text-slate-300'>Log In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
