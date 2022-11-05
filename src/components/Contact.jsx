import React from 'react'

const Contact = () => {
  return (
  <div name='contact' className='w-full min-h-screen bg-[#0a192f] p-4'>
    <div className='px-10 py-16 text-left font-bold'>
          <h1 className='text-[#ffffff] text-4xl sm:text-6xl md:text-8xl pb-5'>
            Contact
          </h1>
      <div className='pt-10 flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/c4a2caca-db01-46d5-90ae-d98ec9fcdecf" className='flex flex-col max-w-[600px] w-full'>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      </div>
    </div>
</div>
  )
}

export default Contact