import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between lg:text-2xl font-medium lg:px-2 px-1'>
        <h1>Hello <br /> <span className='lg:text-3xl text-xl font-semibold'>Pradyuman👋</span></h1>
        <button className='bg-red-600 hover:bg-red-700 hover:text-gray-700 text-white rounded-full px-4 py-1 cursor-pointer active:scale-95'>Log out</button>
    </div>
  )
}

export default Header