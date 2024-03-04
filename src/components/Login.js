import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
     <div className='absolute' >
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='login image'/>
     </div>
     <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
      <h1 className='font-bold text-3xl py-4'>Sign in</h1>
       <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
       <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
       <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>Sign In</button>
     </form>
      </div>
  )
}

export default Login