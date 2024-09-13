import React from 'react'
import mobile_ka_photo from '../../assets/images/mobile-0819.jpg'
import stranger_things from '../../assets/images/boxshot.png'

const Body2 = () => {
  return (
    <>
        <div className='flex bg-black h-full w-screen'>
            <div className=''>
                  <div>

                      <img src={mobile_ka_photo} alt="" className='h-[60vh]' />

                  </div>

                  <div className='ml-28 -my-1 w-[30%] rounded-2xl bg-slate-950 '>

                        <img src={stranger_things} alt="" className='h-[20vh]'/>

                  </div>
            </div>
            <div>
              <h1>Download your shows to watch offline</h1>
              <p>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
      <div className="bg-zinc-500 h-[2vh]"></div>
    </>
  )
}

export default Body2