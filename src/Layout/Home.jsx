import React from "react";
import { Navbar } from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import Joblist from "../component/Joblist";
import { Link } from "react-router";

const Home = () => {
  // Link
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Joblist isHome={true} />
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
};

export default Home;
