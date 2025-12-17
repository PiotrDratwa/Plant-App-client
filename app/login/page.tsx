'use client'
import React, { useState } from 'react'
import { handleLogin, GetPlants } from '../api/api'
import { useRouter } from 'next/navigation';

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleLogin(userName, password);
    if (success) router.push('/');
  };


  return (
    <div className="flex justify-center items-center bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl h-160 gap-12">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-lime-700/30 px-4 py-8 rounded-3xl">
        <input
          type="text"
          placeholder="Username"
          className='w-120 p-2 bg-lime-100 rounded-xl text-stone-900'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className='w-120 p-2 bg-lime-100 rounded-xl text-stone-900'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className='w-120 p-2 bg-lime-800 rounded-xl text-lime-700-10 mt-12 cursor-pointer'>Login</button>
      </form>
    </div>
  )
}

export default Login