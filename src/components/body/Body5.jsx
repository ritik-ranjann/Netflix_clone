import React from 'react'

const Body5 = () => {
  return (
    <>
    <div className='bg-black h-full w-screen'>
      <div>
        <h1>Frequently Asked Questions</h1>
          <div>
            <h2>What is Netflix?</h2>
          </div>
          <div>
            <h2>How much does Netflix cost?</h2>
          </div>
          <div>
            <h2>Where can I watch?</h2>
          </div>
          <div>
            <h2>How do I cancel?</h2>
          </div>
          <div>
            <h2>What can I watch on Netflix?</h2>
          </div>
          <div>
            <h2>Is Netflix good for kids?</h2>
          </div>

          <div>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="font-sans font-semibold ">
                <input id="email-input"
                 type="email" 
                 placeholder="Email address"
                 name="email" 
                 className="border-[1px] pl-1 px-44 py-3 rounded-lg bg-transparent" />
                <button className="rounded-lg bg-[#C11119] px-11 py-3 m-0 ml-6 " >Get Started &gt;</button>
            </div>
          </div>
        </div>
    </div>
    <div className="bg-zinc-500 h-[2vh]"></div>
    </>
  )
}

export default Body5