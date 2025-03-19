import { useState } from 'react'
import { Navbar } from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import Joblist from './component/Joblist'


function App() {
  return (
    <>
     <Navbar/>
    <Hero/>
    <Card/>
    <Joblist/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App
