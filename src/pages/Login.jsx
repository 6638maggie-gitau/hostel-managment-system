import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-r from-blue-900 to-blue-600'>
        <div className='bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl'>
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Welcom back!</h2>
            <form className='space-y-5'>
                <div>
                    <label className='block text-gray-600 mb-2'>Email</label>
                    <input type="email"  placeholder='Enter your email' className='w-full px-4 py-2 border rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label className='block text-gray-600 mb-2'>Pssword</label>
                    <input type="password" placeholder='Enter your password' className='w-full px-4 py-2 
                  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '/>
                </div>
                <button type='submit' className='w-full bg-blue-900 text-white py-2 rounded-lg font-semibold
                hover:bg-blue-700 transition'>Login</button>
                <div className='text-center mt-6'>
                    <p className='text-gray-600'>Don't have an account?</p>
                    <Link to="/register" className='text-blue-700 font-semibold hover:underline'>Create Account</Link>
                </div>
            </form>
</div>
    </div>
  )
}

export default Login