import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Layout/Home";
import Jobs from "./Layout/Jobs";
import Addjobs from "./Layout/Addjobs";
import JobPage from "./component/JobPage";
import Editjob from "./component/Editjob";

function App() {
  async function addJob(formData) {
    const res = await fetch("https://job-list-server-3.onrender.com/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    return;
  }
  async function deleteFormData(jobId) {
    const res = await fetch(
      `https://job-list-server-3.onrender.com/jobs/${jobId}`,
      {
        method: "DELETE",
      }
    );
    alert("Deleted succeesfully");
  }
  async function editFormData(updatedFormData) {
    try {
      let { id } = updatedFormData;
      const res = await fetch(
        `https://job-list-server-3.onrender.com/jobs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error in  app page updated section", error);
    }

    return;
  }

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteFormData={deleteFormData} />}
        />
        <Route
          path="/edit-jobs/:id"
          element={<Editjob addJobUpdatedSubmit={editFormData} />}
        />
        <Route path="/addjobs" element={<Addjobs addJobSubmit={addJob} />} />
      </Routes>
    </>
  );
}

export default App;
