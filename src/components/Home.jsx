import React from 'react'

const Home = () => {
  return (
    <div name="home" className='w-full min-h-screen bg-programming-image'>

        {/* <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className="text-9xl text-center sm:-7xl font-bold text-[#ffffff]"> Rudresh Patel</h1>
            <h2 className="text-5xl text-center sm:-8xl font-bold text-[#ffffff]"> Computer Science Major at Georgia Tech </h2>
            <h3 className='text-3xl text-center sm:-9xl text-[#ffffff]'> with Intelligences and Devices threads</h3>            
        </div> */}
      <div className="flex h-screen justify-center items-center text-[#ffffff]">
        <div className=" text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">Rudresh Patel</h1>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Computer Science Major at Georgia Tech</h2>
          <h3 className="text-xl sm:text-2xl font-bold">with Intelligences and Devices threads</h3>
        </div>
      </div>
    </div>
  )
}

export default Home









// import React from "react"
// export default function Home() {
//     return <h1> Home Page! </h1>
// }