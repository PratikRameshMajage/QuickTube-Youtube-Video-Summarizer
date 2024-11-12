import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full h-[18%] px-8 py-10 bg-yellow-300 flex items-center justify-between'>
          <h1 className='text-2xl'><i className="ri-menu-line font-semibold"></i> <Link to="/" >Qiuck-Tube: Youtube Video Summary Extention</Link> </h1>
        <div className='flex '>
          <h3 className='text-base px-5 py-3 bg-zinc-900 text-white rounded-md mr-5'>
            <Link to="/createuser" >Create Account</Link>
          </h3>
          <h3 className='text-base px-5 py-3 bg-zinc-900 text-white rounded-md'>
            <Link to="/login">Log In</Link>
          </h3>
        </div>
        </div>
        <form action="" method="post" className='h-[75%] flex flex-col items-center justify-center'>
            <input className='mb-5 px-5 py-3 outline-none bg-transparent text-white text-base border-2 border-zinc-500 rounded-md w-1/4' type="email" placeholder='Enter Email'/>
            <input className='mb-5 px-5 py-3 outline-none bg-transparent text-white text-base border-2 border-zinc-500 rounded-md w-1/4' type="password" placeholder='Enter Password'/>
          <input className=' px-5 py-3 outline-none bg-yellow-300 text-base rounded-md' type="Submit" value="Submit" />
        </form>
        <div className='footer h-[7%] bg-zinc-700 text-white flex items-center justify-center' >
          <h5>Qiuck-Tube Piv. Ltd. Copyright &copy; 2024-25</h5>
        </div>
      </div>
    </>
  )
}

export default Loginpage