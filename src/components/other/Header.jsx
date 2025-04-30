import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between text-2xl font-medium px-4'>
        <h1>Hello <br /> <span className='text-3xl font-semibold'>Pradyuman👋</span></h1>
        <button className='bg-red-600 text-white rounded-full px-4 py-1 cursor-pointer active:scale-95 font- '>Log out</button>
    </div>
  )
}

export default Header