import React from 'react'
import half_scene from '../../assets/images/device-pile-in.png'

const Body3 = () => {
  return (
    <>
    <div className='flex h-full w-full bg-black'>
      <h1>watch everywhere</h1>
      <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

      <div>
        <img src={half_scene} alt="" />
      </div>

    </div>
    <div className="bg-zinc-500 h-[2vh]"></div>
    </>
  )
}

export default Body3