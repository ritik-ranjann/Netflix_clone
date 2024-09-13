import React from 'react'

const Signin = () => {
  return (
    <div className=''>
        <form action="signIn" className=''>
            <input type="email" placeholder='Email or Mobile Number' />
            <input type="password" placeholder='Password' />

            <button type="submit">Sign In</button>

            <p>OR</p>

            <button type='submit'>Login with OTP</button>
        </form>
    </div>
  )
}

export default Signin