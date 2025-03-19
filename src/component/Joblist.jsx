import React from 'react'
import jobs from '../jobs.json'
import Jobcard from './Jobcard'
const Joblist = () => {
    // console.log(jobs.jobs);
    let jobArray = jobs.jobs    
  return (
   <>
   <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
           jobArray.map((ele)=>{
         return <Jobcard {...ele}/>
           })
          }
        </div>
      </div>
    </section>   
   </>
  )
}

export default Joblist