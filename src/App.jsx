import { useState } from 'react'
import {Route,Routes} from 'react-router'
import Home from './Layout/Home'
import Jobs from './Layout/Jobs'
import Addjobs from './Layout/Addjobs'
import JobPage from './component/JobPage'

function App() {
 
  async function addJob(formData){
    const res = await fetch("http://localhost:8000/jobs" , {
      method: 'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json()
    console.log(data);
    return
   }
async function deleteFormData(jobId){
  const res = await fetch(`http://localhost:8000/jobs/${jobId}`, {
    method: 'DELETE',
  })
  alert("Deleted succeesfully")
}

  return (
    <>
   <Routes>
    <Route index element = {<Home/>} />
    <Route path='/jobs' element = {<Jobs/>} />
    <Route path='/jobs/:id' element = {<JobPage deleteFormData={deleteFormData} />} />
    <Route path='/addjobs' element= {<Addjobs addJobSubmit = {addJob} />}/>
   </Routes>
    </>
  )
}

export default App
