import React from "react";
import Navbar from "./Navbar";
import datascience from "../assets/datascience.jpg";
import datavisual from "../assets/datavisual.jpg";
import machinelearning from "../assets/machinelearning.jpg";
import dataanalysis from "../assets/dataanalysis.jpg";
import researchconsult from "../assets/researchconsult.jpg";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div className="bg-white m-12 sm:m-20 p-2 sm:p-10 text-blue-900 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] sm:w-[500px] h-[300px] rounded mx-auto sm:mr-2 my-4"
          src={datascience}
          alt="there is a data science image here"
        />
        <div className="flex flex-col justify-center ml-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl pl-4 font-bold py-2 text-blue-900 ">
            DATA SCIENCE
          </h1>
          <div className="">
            <p className=" text-sm sm:text-l md:leading-6 md:text-xl  pl-4">
              Unlock the full potential of your data with our Data Science
              services. Whether it's leveraging Python, R, or Microsoft Excel,
              we apply advanced techniques to extract valuable insights,
              empowering your business with informed decision-making.
            </p>
            <button
              onClick={() => navigate("contact")}
              className="text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-[0] py-3 bg-blue-900"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] sm:w-[500px]  h-[300px] rounded mx-auto sm:mr-2 my-4"
          src={datavisual}
          alt="there is a data visualization image here"
        />
        <div className="flex flex-col justify-center ml-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl pl-4 font-bold py-2 text-blue-900 ">
            DATA VISUALIZATION
          </h1>
          <div className="">
            <p className="text-sm sm:text-l md:leading-6 md:text-xl  pl-4">
              Transform raw data into compelling visual narratives with our Data
              Visualization expertise. Using Power BI and Tableau, we create
              engaging dashboards that simplify complex information, making it
              accessible and actionable.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-[0] py-3 bg-blue-900"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] sm:w-[500px]  h-[300px] rounded mx-auto sm:mr-2 my-4"
          src={machinelearning}
          alt="there is a machine learning image here"
        />
        <div className="flex flex-col justify-center ml-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl pl-4 font-bold py-2 text-blue-900 ">
            MACHINE LEARNING
          </h1>
          <div className="">
            <p className="text-sm sm:text-l md:leading-6 md:text-xl pl-4">
              Embrace the future of technology with our Machine Learning
              services. Our team, proficient in Python and R, develops tailored
              solutions for predictive modeling, classification, and
              optimization, ensuring your business stays ahead in the
              competitive landscape.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-[0] py-3 bg-blue-900"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] sm:w-[500px]  h-[300px] sm:h-[450px] rounded mx-auto sm:mr-2 my-4"
          src={dataanalysis}
          alt="there is a data analysis image here"
        />
        <div className="flex flex-col justify-center ml-2">
          <h1 className="md:text-2xl sm:text-xl text-l font-bold pl-4 py-2 text-blue-900 ">
            DATA ANALYSIS & RESEARCH CONSULTING
          </h1>
          <div className="">
            <p className="text-sm sm:text-l md:leading-6 md:text-xl  pl-4">
              Navigate the complexities of data with our Data Analysis services.
              Beyond mere analysis, we provide interpretation and modeling. Also
              experience the depth of our research capabilities and strategic
              insights through our Research and Consulting services. From
              in-depth analysis to business intelligence, we offer comprehensive
              guidance to fuel your business growth.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-[0] py-3 bg-blue-900"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
