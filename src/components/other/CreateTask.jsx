import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='flex justify-between gap-4 bg-[#1C1C1C] mt-4 rounded'>
                <div className='w-3/7 h-[370px] p-8'>
                    <div>
                        <h1 className='text-lg'>Task Title</h1>
                        <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-lg'>Date</h1>
                        <input className='border-1 my-1 w-full rounded-[5px] p-1 px-2' type="date" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-lg'>Assign to</h1>
                        <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='Employee name' />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-lg'>Category</h1>
                        <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='design,dev,etc' />
                    </div>
                </div>
                <div className='w-3/7 h-[370px] p-8'>
                    <div>
                        <h1 className='text-lg'>Description</h1>
                        <input className='border-1 w-full h-[220px] rounded-[5px] p-1 px-2' type="text" />
                        <button className='text-xl bg-emerald-600 p-2 w-full mt-4 rounded-xl '>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask