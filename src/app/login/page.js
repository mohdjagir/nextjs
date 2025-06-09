"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const navigate= useRouter()
  return (
    <div>
    <h1>Login</h1><br/>
    <button onClick={()=>navigate.push("/")}>go to home</button>
    </div>
  )
}

export default Login