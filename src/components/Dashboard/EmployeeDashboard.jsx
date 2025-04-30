import React from 'react'
import Header from '../other/Header'
import TaskSection from '../other/TaskSection'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-6 h-screen'>
        <Header/>
        <TaskSection/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard