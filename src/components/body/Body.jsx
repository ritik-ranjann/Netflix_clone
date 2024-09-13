import React from 'react'
import Tv_logo from '../../assets/images/tv.png'

const Body = () => {
  return (
    <>
      <div className='flex h-full w-screen bg-black '>
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>

            <div className=''>
              <img src={Tv_logo} alt="" />
            </div>
      </div>
    <div className="bg-zinc-500 h-[2vh]"></div>
    </>
  )
}

export default Body