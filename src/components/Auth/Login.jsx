import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        console.log('email:', email);
        console.log('password:',password);     
        setemail('')   
        setpassword('')   
    }

    return (
        <div className='bg-[#111] h-screen flex justify-center items-center'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-col gap-8 p-4 border-4 rounded-3xl p-10  border-emerald-700'>
                <input value={email} onChange={(e) => {
                    setemail(e.target.value)
                }} required type="email" placeholder='Enter your email' className='border-4 text-2xl py-2 px-4 rounded-full border-emerald-700' />
                <input value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} required type="password" placeholder='Enter password' className='border-4 text-2xl py-2 px-4 rounded-full border-emerald-700' />
                <button className='bg-emerald-700 px-6 py-2 mx-auto text-2xl font-semibold cursor-pointer active:scale-95 rounded-full '>Login</button>
            </form>
        </div>
    )
}

export default Login