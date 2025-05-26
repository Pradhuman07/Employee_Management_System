import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
    return (
        <div className='lg:px-6 lg:pt-4 lg:h-screen lg:pb-1 px-3.5 py-3  flex flex-col bg-[#111]'>
            <Header/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
