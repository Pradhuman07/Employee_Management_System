import React from 'react'

const TaskSection = () => {
  return (
    <div className='flex justify-between gap-8'>
        <div className='w-[25%] bg-red-400 py-8 px-8 rounded-4xl text-3xl font-bold my-8 '>
            <h2>0</h2>
            <h1>New Task</h1>
        </div>
        <div className='w-[25%] bg-blue-400 py-8 px-8 rounded-4xl text-3xl font-bold my-8 '>
            <h2>0</h2>
            <h1>New Task</h1>
        </div>
        <div className='w-[25%] bg-green-400 py-8 px-8 rounded-4xl text-3xl font-bold my-8 '>
            <h2>0</h2>
            <h1>New Task</h1>
        </div>
        <div className='w-[25%] bg-yellow-400 py-8 px-8 rounded-4xl text-3xl font-bold my-8 '>
            <h2>0</h2>
            <h1>New Task</h1>
        </div>
    </div>
  )
}

export default TaskSection