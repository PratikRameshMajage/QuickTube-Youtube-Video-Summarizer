import React from 'react'

const Homepage = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full h-[18%] px-8 py-10 bg-yellow-500 flex items-center justify-between'>
          <h1 className='text-2xl'><i class="ri-menu-line"></i> Qiuck-Tube: Youtube Video Summary Extention</h1>
        <div className='flex '>
          <h3 className='text-base px-5 py-3 bg-zinc-900 text-white rounded-md mr-5'>Create Account</h3>
          <h3 className='text-base px-5 py-3 bg-zinc-900 text-white rounded-md'>Log In</h3>
        </div>
        </div>
        <form action="" method="post" className='h-[75%] flex flex-col items-center justify-center'>
          <input className='mb-10 px-5 py-3 outline-none bg-transparent text-white text-base border-2 border-zinc-500 rounded-md w-1/4' type="text" placeholder='Enter youtube URL'/>
          <input className=' px-5 py-3 outline-none bg-yellow-500 text-base rounded-md' type="Submit" value="Submit" />
        </form>
        <div className='footer h-[7%] bg-zinc-700 text-white flex items-center justify-center' >
          <h5>Qiuck-Tube Piv. Ltd. Copyright &copy; 2024-25</h5>
        </div>
      </div>
    </>

  )
}

export default Homepage