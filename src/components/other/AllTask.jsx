import React from 'react'

const AllTask = () => {
  return (
    <div id='allTaskScrollBar' className='p-6 bg-[#1C1C1C] mt-6 rounded h-44 overflow-auto'>
        <div className='flex items-center justify-between p-2 px-4 rounded text-xl mb-2 bg-red-400'>
            <h1>Pradyuman</h1>
            <h2>Make a UI Design</h2>
            <h3>Status</h3>
        </div>
        <div className='flex items-center justify-between p-2 px-4 rounded text-xl mb-2 bg-yellow-400'>
            <h1>Pradyuman</h1>
            <h2>Make a UI Design</h2>
            <h3>Status</h3>
        </div>
        <div className='flex items-center justify-between p-2 px-4 rounded text-xl mb-2 bg-green-400'>
            <h1>Pradyuman</h1>
            <h2>Make a UI Design</h2>
            <h3>Status</h3>
        </div>
        <div className='flex items-center justify-between p-2 px-4 rounded text-xl mb-2 bg-blue-400'>
            <h1>Pradyuman</h1>
            <h2>Make a UI Design</h2>
            <h3>Status</h3>
        </div>
    </div>
  )
}

export default AllTask