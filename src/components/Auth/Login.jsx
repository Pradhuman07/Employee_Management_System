import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        console.log('email:', email);
        console.log('password:', password);
        setemail('')
        setpassword('')
    }

    return (
        <div className='bg-[#111] h-screen w-screen flex justify-center items-center'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-col lg:m-0 mt-[-15vh] lg:p-10 gap-4 lg:gap-8 p-6 lg:border-4 border-2 rounded-3xl  border-emerald-700 '>
                <input value={email} onChange={(e) => {
                    setemail(e.target.value)
                }} required type="email" placeholder='Enter your email' className='lg:border-4 border-2 text-lg lg:text-2xl py-2 lg:px-4 rounded-full border-emerald-700 text-center' />
                <input value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} required type="password" placeholder='Enter password' className='lg:border-4 border-2 text-lg lg:text-2xl py-2 lg:px-4 rounded-full border-emerald-700 text-center' />
                <button className='bg-emerald-700 lg:px-6 lg:py-2 px-4 py-1 mx-auto text-lg lg:text-2xl font-medium cursor-pointer active:scale-95 rounded-full'>Login</button>
            </form>
        </div>
    )
}

export default Login