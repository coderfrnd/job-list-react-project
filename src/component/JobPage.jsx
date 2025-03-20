import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { Navbar } from './Navbar'
// useParams
const JobPage = ({deleteFormData}) => {
    let {id} = useParams()
    const [loading, setLoading] = useState(true)
   let [apiData,setApiData] =  useState(null)
    useEffect(()=>{
       async function fetchData(){
        try {
            let res = await fetch(`http://localhost:8000/jobs/${id}`)
            let data= await res.json()
            setApiData(data)
            setLoading(false)
            console.log(data);
            
        } catch (error) {
            console.log("Somee Errors occureed in react jobpage",error);
        }
        }
     fetchData()
    },[])
    let navigate = useNavigate()

    function deleteData(jobId){
       const confirm = window.confirm("Are you sure you want to delete this job")
       if(!confirm)return
     deleteFormData(jobId)
     navigate("/jobs")
    }
  return (
    <>
    <Navbar/>
       <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to='/jobs'
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </Link>
      </div>
    </section>
{loading ? "Loading" :
    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">Full-Time</div>
              <h1 className="text-3xl font-bold mb-4">
           {apiData.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700">{apiData.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Info
              </h3>

              <p className="mb-4">
             {apiData.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{apiData.salary}</p>
            </div>
          </main>
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{apiData.company.name}</h2>

              <p className="my-2">
              {apiData.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
               {apiData.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{apiData.company.contactPhone}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to="/jobs"
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
              <button onClick={()=>{deleteData(apiData.id)}}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
}
     </>
  )
}

export default JobPage