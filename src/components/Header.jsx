import React, { useState } from "react";
import logo_netflix from "../assets/images/Netflix_Logo_PMS.png";
import { Link } from "react-router-dom";
import '../components/header.css';
import Navbar from './Navbar';

const Header = () => {
    const [selectedValue, setSelectedValue] = useState();
    const [mail, setMail] = useState({
        email: "",
        list: []
    });

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    let { email, list } = mail;

    let handleChangemail = (e) => {
        let { name, value } = e.target;
        setMail({ ...mail, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let newObj = {
            email: mail.email,
        };
        setMail({ email: "", list: [...mail.list, newObj] });
    }

    return (
        <>
            {/* Parent-Box */}
            <div className="h-full w-full bg-cover bg-center relative" name="parent-header" id="parent-box">
                {/* black opacity */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                
                {/* NavBar-Section */}
                <div className="relative flex flex-col h-[15vh] justify-between px-4 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo box */}
                        <div className="h-[60px] md:h-[70px] lg:h-[80px]">
                            <img src={logo_netflix} alt="Netflix Logo" className="h-full w-auto" />
                        </div>
                        
                        {/* Navbar right aside */}
                        <div className="flex items-center space-x-4 md:space-x-6">
                            {/* Language-Box */}
                            <div name="language-box" id="language-box">
                                <select
                                    name="language-select"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    className="text-white border-[1px] rounded-lg px-4 py-1 bg-transparent"
                                >
                                    <option value="en-IN" className="text-black">English</option>
                                    <option value="hi-IN" className="text-black">हिंदी</option>
                                </select>
                            </div>

                            {/* Sign In Button */}
                            <div className="text-white bg-[#C11119] px-4 py-2 rounded-md text-sm font-medium">
                                <Link to={"/signin"}>Sign In</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main-text-section */}
                    <div className="h-[55vh] flex flex-col items-center justify-center text-center px-4 py-28">
                        <div className="text-white">
                            <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-tight lg:leading-tight">
                                Unlimited movies, TV shows, and more
                            </h1>
                            <h5 className="text-lg md:text-xl lg:text-2xl mt-4">
                                Watch anywhere. Cancel anytime.
                            </h5>
                            <h5 className="text-sm md:text-base lg:text-lg mt-2">
                                Ready to watch? Enter your email to create or restart your membership.
                            </h5>
                        </div>

                        {/* Email-input section */}
                        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                id="email-input"
                                type="email"
                                placeholder="Email address"
                                onChange={handleChangemail}
                                name="email"
                                className="border-[1px] px-4 py-3 rounded-lg bg-transparent w-full sm:w-auto sm:px-32"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-[#C11119] text-white px-6 py-3 rounded-lg w-full sm:w-auto"
                            >
                                Get Started &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-500 h-[2vh]"></div>
        </>
    );
}

export default Header;
