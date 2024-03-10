import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { DevTool } from "@hookform/devtools"

function Login() {

const form = useForm({
    defaultValues:{
        username:"",
        email:"",
        password:"",
        phoneNumber:"",
    }
});
const { register,control,handleSubmit,formState }=form;
const { errors } = formState;



const onSubmit = (data)=>{
    console.log("Form Submitted",data);
}
  

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center">Log In</h1>
          <p className="text-gray-500 text-center mt-2">
            Welcome to our delicious food website!
          </p>
        </div>
        <form  onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
              {...register("username",{
                required:{
                  value: true,
                  message:"Fullname is required"
                }
              })}
             
            />
            <p clasName="font-xs text-left text-red-700">{errors.username?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
              {...register("phoneNumber",{
                required:{
                  value: true,
                  message:"Phone Number  is required"
                }
              })}
             
            />
            <p clasName="text-red font-xs text-left">{errors.phoneNumber?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
              {...register("email",{
                pattern:{
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid Email"
                }
              })}
             
            />
            <p clasName="text-red font-xs text-left">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
            
              type="password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
              {...register("password",{
                required:{
                  value: true,
                  message:"Password is required"
                }
              })}
              
            />
            <p clasName="text-red font-xs text-left">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <DevTool control={control}/>
        {/* <p className="text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:text-indigo-900">
            Log in
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default Login;