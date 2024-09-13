import React, { useState } from "react";
import logo_netflix from "../assets/images/Netflix_Logo_PMS.png";
import { Link,Outlet } from "react-router-dom";
import heroimg from '../assets/images/Hero_image.jpg'
import hero from '../assets/images/Hero_image.jpg'
import '../components/header.css'
import Navbar from './Navbar';

const Header = () => {
    const [selectedValue, setSelectedValue] = useState();
    const [mail,setMail] = useState({
        email:"",
        list:[]
    })
    
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    let {email,list}=mail

    let handleChangemail = (e)=>{
        let {email,value} =e.target
        setMailValue({...mail, [email]:value})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let newObj={
            email:mail.email,
            
        }
        setMail({email:"", list:[...mail.list,newObj] })
        
    }
    return (
    <>
    {/* Parent-Box  */}

    <div className="h-full w-full bg-cover bg-center relative" name="parent-header" id="parent-box">

        {/* black opacity  */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            {/* NavBar-Section */}

                <div className=" relative flex flex-col h-[15vh] justify-between" name="navbar-line" id="navbar-section-main">

                    <div className="flex items-center justify-between w-full">
                        {/* Logo box */} 

                            <div className=" mx-4 my-2 h-[95%] w-[14.8%] " name="logo-box">
                                <img src={logo_netflix} alt=""  />
                            </div>
                        {/* Navbar right aside */}

                            <div className="h-[15vh] my-0 px-16 ml-[47vw] flex justify-around items-center" id="right-aside-nav">

                                {/* Language-Box */}

                                <div name="language-box" id="language-box">
                                    <select name="language-select" value={selectedValue} onChange={handleChange} className="text-white border-[1px] rounded-lg px-6 py-[0.7vh] bg-transparent  ">
                                        <option value="en-IN" className="text-black">English</option>
                                        <option value="hi-IN" className="text-black">हिंदी</option>
                                    </select>
                                </div>


                                {/* Sign In Button */}

                                <div className=" text-white flex items-center rounded-md h-7 w-auto px-4 py-3 ml-4 font-sans text-nowrap text-sm whitespace-nowrap bg-[#C11119]" name="signin-box">
                                    <Link to={"/signin"} >Sign In</Link>
                                </div>
                            </div>
                    </div>

                    {/* main-text-section  */}

                    <div className="h-[55vh] flex justify-center text-center bg-transparent m-2 mx-auto" id="main-text-box">

                            {/* Text-Section  */}

                            <div className="text-white font-sans" name="Middle-box">
                              <div className="content-box">
                                    <h1 className=" font-extrabold tracking-tight text-[3rem]  my-4">Unlimited movies, TV shows and more</h1>
                                    <h5 className=" text-[1.4rem] pt-2 m-2">Watch anywhere. Cancel anytime</h5>
                                    <h5 className=" tracking-tight text-[1.2rem] m-2">
                                        Ready to watch? Enter your Email to create or restart your
                                        membership.
                                    </h5 >
                                </div >
            
                                {/* Email-input section */}
                                <div className="font-sans font-semibold ">
                                    <input id="email-input"
                                     type="email" 
                                     placeholder="Email address"
                                     onChange={handleChangemail} 
                                     name="email" 
                                     className="border-[1px] pl-1 px-44 py-3 rounded-lg bg-transparent" />
                                    <button onClick={handleSubmit} className="rounded-lg bg-[#C11119] px-11 py-3 m-0 ml-6 " >Get Started &gt;</button>
                                </div>
                            </div>
                    </div> 
                </div>    
    </div>

    <div className="bg-zinc-500 h-[2vh]"></div>
</>
)}


export default Header