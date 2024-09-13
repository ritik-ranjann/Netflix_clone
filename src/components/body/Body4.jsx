import React from 'react'
import children_logo from '../../assets/images/children_Logo.png'

const Body4 = () => {
  return (
    <><div className='flex bg-black h-full w-screen'>
      <div>
        <img src={children_logo} alt="" />
      </div>
      <div>
        <h1>Create profiles for kids</h1>
        <p>Send children on adventures with their favourite characters in a space  made  just for them-free with your membership.</p>
      </div>
    </div>
    <div className="bg-zinc-500 h-[2vh]"></div>
    </>
  )
}

export default Body4