import React from 'react'
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <div className='h-[100vh] flex justify-around  '>
        <Logo />
        <div id='nav-line' className=' bg-slate-50 justify-around  '>
        </div>
    
   
        <div id="hero-section" className='h-[15vh] p-10  flex gap-5 bg-slate-500'>
            
            <div name="language-box" id="language-box"  >
                <select name="language-select" className="flex items-center content-center ml-[50vw] px-2 border-[1px] rounded-sm py-1 bg-transparent">
                    <option value="en-IN">English</option>
                    <option value="hi-IN">हिंदी</option>
                </select>
            </div>
            <div className="flex items-center rounded-md px-4 py-4 font-sans text-nowrap text-xl  bg-[#C11119]" name="signin-box">
                <Link to={"/signin"} >Sign In</Link>
            </div>      
        </div>
    <div className=''>
        Nav Content
    </div>
   </div>
                

   </>
  )
}

export default Navbar