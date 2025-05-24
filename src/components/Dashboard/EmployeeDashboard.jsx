import React from 'react'
import Header from '../other/Header'
import TaskSection from '../other/TaskSection'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='lg:p-6 px-3.5 py-2 h-screen'>
        <Header/>
        <TaskSection/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard