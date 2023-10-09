import React from 'react'
function Login()
{
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type ="email" placeholder='Enter Email'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type ="password" placeholder='Enter password'/>
                    </div>
                    <button className='btn btn-success'>Log in</button>
                    <p>You are agree to our terms and polices</p>
                    <button className='btn bbtn-default border'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login