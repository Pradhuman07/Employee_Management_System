import React from 'react'

const CreateTask = () => {
    return (
        <div className='flex max-sm:flex-col justify-between lg:gap-4 gap-3 lg:px-6 lg:pt-4 lg:pb-5 p-4 pt-3 bg-[#1C1C1C] mt-3 lg:mt-4 lg:mx-2 rounded-2xl'>

            {/* left-section */}
            <form className='lg:w-[48%] flex flex-col gap-2.5 lg:gap-3.5'>
                <div>
                    <h1 className='text-lg'>Task Title</h1>
                    <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='Make a UI Design' />
                </div>
                <div>
                    <h1 className='text-lg'>Deadline</h1>
                    <input className='border-1 my-1 w-full rounded-[5px] p-1 px-2' type="date" />
                </div>
                <div>
                    <h1 className='text-lg'>Assign to</h1>
                    <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='Employee name' />
                </div>
                <div>
                    <h1 className='text-lg'>Category</h1>
                    <input className='border-1 w-full rounded-[5px] p-1 px-2' type="text" placeholder='design,dev,etc' />
                </div>
            </form>

            {/* right-section */}
            <form className='lg:w-[48%] mr-2'>
                <div>
                    <h1 className='text-lg mb-1'>Description</h1>
                    <textarea placeholder='Enter description' className='border-1 w-full lg:h-[214px] h-8 lg:p-3 px-2 py-1 rounded-[5px] lg:placeholder-transparent'></textarea>
                    <button className='text-xl bg-emerald-600 p-1 w-full mt-2 lg:rounded-xl rounded-2xl cursor-pointer active:scale-99'>Create Task</button>
                </div>
            </form>

        </div>
    )
}

export default CreateTask