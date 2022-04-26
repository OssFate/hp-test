import React from 'react'
import logo from './../../resources/logo.svg'
//import './login.css'

export default function login() {
  return (
    <div class="h-screen bg-cyan-900">
      <div class="flex flex-col min-h-screen justify-center items-center pb-20">
        
        <img src={logo} class="animate-spin-slow w-60" alt="logo" />
        
        <form>
          <label class="block">
            <span class="block text-sm font-medium text-sky-300">Username</span>
            <input class="text-slate-800 rounded-md text-center" placeholder="..." />
          </label>
          <label class="block mt-2">
            <span class="block text-sm font-medium text-sky-300">Password</span>
            <input type="password" class="text-slate-800 rounded-md text-center" placeholder="..." />
          </label>
          <button type='submit' class="bg-sky-500 text-cyan-50 mt-3 rounded-md border-2 border-gray-600 w-full h-10 font-bold hover:bg-sky-600">Login</button>
        </form>
      </div>
    </div>
  );
}
