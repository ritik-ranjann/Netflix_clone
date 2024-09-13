import React from 'react'
// import { Header } from '..components/Header';
import Header from './Header';
import Footer from './Footer';
import Body5 from './body/Body5';
import Body4 from './body/Body4';
import Body3 from './body/Body3';
import Body2 from './body/Body2';
import Body from './body/Body';
import { Outlet } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className='text-white h-[100vh] w-[100vw] box-border p-0 m-0 '>
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Footer />
    </div>
  )
}

export default HomePage