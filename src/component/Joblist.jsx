import React, { useEffect, useState } from "react";
import Jobcard from "./Jobcard";
import Spinner from "./Assets/Cliploader";
const Joblist = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let url = isHome ? "?_limit=3" : "";
      let apiUrl = `https://job-list-server-3.onrender.com/jobs/` + url;
      console.log(apiUrl);
      try {
        let res = await fetch(apiUrl);
        let data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Errors in Job List Section", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Job" : "Browse Job"}
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Spinner loading={loading} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((ele) => (
                <Jobcard key={ele.id} {...ele} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Joblist;
