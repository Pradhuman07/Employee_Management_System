import React from 'react'

const TaskSection = () => {
  return (
    <div className='flex lg:gap-6 gap-3 flex-wrap lg:mt-8 mt-6'>

        <div className='lg:w-[22.65vw]  w-[44vw] bg-red-400 lg:p-8 py-3 px-5 rounded-3xl lg:rounded-4xl text-lg lg:text-3xl font-bold '>
            <h2 className='max-sm:text-xl'>0</h2>
            <h1>New Task</h1>
        </div>
        <div className='lg:w-[22.65vw]  w-[44vw] bg-blue-400 lg:p-8 py-3 px-5 rounded-3xl lg:rounded-4xl text-lg lg:text-3xl font-bold '>
            <h2 className='max-sm:text-xl'>3</h2>
            <h1>Completed</h1>
        </div>
        <div className='lg:w-[22.65vw]  w-[44vw] bg-green-400 lg:p-8 py-3 px-5 rounded-3xl lg:rounded-4xl text-lg lg:text-3xl font-bold '>
            <h2 className='max-sm:text-xl'>0</h2>
            <h1>Accepted</h1>
        </div>
        <div className='lg:w-[22.65vw]  w-[44vw] bg-yellow-400 lg:p-8 py-3 px-5 rounded-3xl lg:rounded-4xl text-lg lg:text-3xl font-bold '>
            <h2 className='max-sm:text-xl'>1</h2>
            <h1>Failed</h1>
        </div>

    </div>
  )
}

export default TaskSection