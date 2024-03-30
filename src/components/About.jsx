import React from "react";
import Navbar from "./Navbar";
import data from "../assets/data.jpg";

function About() {
  return (
    <div className="bg-white m-12 sm:m-20 p-2 sm:p-10 text-blue-900 ">
      <h1 className="font-bold text:2xl sm:text-4xl mb-8 text-center">
        About Us
      </h1>

      <h2 className="font-bold text-2xl sm:text-3xl mb-4 text-center">
        Vision and Mission
      </h2>
      <p className="font-sans p-4 text-l  sm:text-xl border-solid border-2 border-indigo-600 rounded-lg my-7">
        At Data Analyst Hub, our vision is to be the catalyst for innovation
        through data, fostering a world where businesses make informed decisions
        that drive success. Our mission is to empower organizations with
        cutting-edge data solutions, revolutionizing the way they perceive and
        leverage information.
      </p>

      <img
        className="  bg block w-full  h-[300px] sm:h-[600px] rounded-lg "
        src={data}
        alt="there is a data image here"
      />

      <h2 className="font-bold text-3xl m-8 text-center"> Core Values </h2>

      <p className="font-sans p-4 text-l  sm:text-xl border-solid border-4 border-indigo-600 rounded-lg">
        <ol className="p-4">
          <li className="py-2">
            {" "}
            <span className="font-bold mb-8">Innovation :</span> We embrace
            creativity and constantly seek new ways to harness the power of
            data.
          </li>
          <li className="py-2">
            <span className="font-bold mb-8">Integrity :</span>
            Trust is the foundation of our relationships. We uphold the highest
            ethical standards in every endeavor.
          </li>
          <li className="py-2">
            {" "}
            <span className="font-bold mb-8">Excellence :</span>
            We strive for excellence in everything we do, setting benchmarks for
            quality and precision.
          </li>
          <li className="py-2">
            <span className="font-bold mb-8">Collaboration :</span> We believe
            in the strength of collaboration, working closely with clients to
            achieve mutual success.
          </li>
        </ol>
      </p>
      <p> </p>

      <h2 className="font-bold text:2xl sm:text-3xl m-8 text-center">
        {" "}
        Our Team{" "}
      </h2>
      <p className="p-4 font-sans text-l  sm:text-xl  border-solid border-2 border-indigo-600 rounded-lg">
        Meet the brilliant minds behind Data Analyst Hub. Our diverse team
        brings together expertise from various domains, ensuring a holistic
        approach to data solutions. From seasoned data scientists to visionary
        consultants, our professionals are dedicated to your success.
      </p>

      <h2 className="font-bold text:2xl sm:text-3xl m-8 text-center">
        Client Success Stories
      </h2>
      <p className="p-4 font-sans text-l  sm:text-xl border-solid border-2 border-indigo-600 rounded-lg">
        Explore the impact we've made on businesses across industries. Through
        case studies and testimonials, witness how Data Analyst Hub has
        transformed challenges into opportunities, empowering our clients to
        thrive in the data-driven landscape.
      </p>
    </div>
  );
}

export default About;
