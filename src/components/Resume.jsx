import React from 'react'
 import pdf from '../assets/resume.pdf';

const Resume = () => {
  return (
    <div name="Resume" className='w-full min-h-screen bg-[#0c1d34] text-[#ffffff]'>
      <div className='px-10 py-16 text-left font-bold'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl pb-5'>
          Resume
        </h1>
        <div class="grid place-items-center">
          <p>If the PDF does not load properly, please {" "}
            <a href={pdf} target="blank" className='text-[#ff5454e3] hover:text-[#f57272]'>
              click here.
            </a>
          </p>
          <iframe title='google drive link' src="https://drive.google.com/file/d/1VPGJDwzrOZk5xCrYyPApC_5ywiol_bOU/preview" width="80%" height="700" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Resume