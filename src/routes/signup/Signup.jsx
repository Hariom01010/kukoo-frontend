import React, {useState} from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { FiEye, FiEyeOff } from "react-icons/fi";
function Signup() {

  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const displayPassword = ()=>{
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate()

  const onSubmit = (data)=>{
    console.log(data)
    axios.post("http://localhost:5000/api/v1/user/signup",data).then(()=>{
      console.log("User created succesfully")
      navigate("/login")
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
          <h1 className='text-4xl text-center pt-4'>Get Connected</h1>
          <p className='text-lg text-center p-3 italic'>Join the conversation and start chatting with your friends instantly!</p>
          
          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className='flex flex-col p-5'>
              <p>Full Name</p>
              <div className='mb-8'>
                <input type="text" {...register("fname", {required: true, })} className='w-4/5 bg-transparent border-b-2 mb-2 outline-none'/>
                {errors.fname?.type == "required"? <p className='text-[#9f0000] font-medium'>First Name is required</p> : <></>}
              </div>

              <p>Username</p>
              <div className='mb-8'>
                <input type="text" {...register("username", {required: true})} className='w-4/5 bg-transparent border-b-2 mb-2 outline-none'/>
                {errors.username?.type == "required"? <p className='text-[#9f0000] font-medium'>Username is required</p> :<></>}
              </div>

              <p>Email</p>
              <div className='mb-8'>
                <input type="email" {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})} className='w-4/5 bg-transparent border-b-2 mb-2 outline-none'/>
                {errors.email?.type == "required"? <p className='text-[#9f0000] font-medium'>Email is required</p> :<></>}
                {errors.email?.type == "pattern"? <p className='text-[#9f0000] font-medium'>Enter a valid email</p> :<></>}
              </div>

              <p>Password</p>
              <div className='mb-8'>
                  <input type={showPassword?'text':`password`} {...register("password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/})} className='w-4/5 bg-transparent border-b-2 mb-2 outline-none inline'/>
                  {showPassword?<FiEyeOff size={25} onClick={displayPassword} className='inline border-b-2 mt-[2px]'/>:<FiEye size={25} onClick={displayPassword} className='inline border-b-2 mt-[2px]'/>}

                {errors.password?.type == "required"? <p className='text-[#9f0000] font-medium'>Passowrd is required</p>: <></>}
                {errors.password?.type == "pattern"? <p className='text-[#9f0000] font-medium text-sm w-4/5'>Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 lowercase letter</p>:<></>}
              </div>
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
