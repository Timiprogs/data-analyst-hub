import React from "react";
import ReactTyped from "react-typed-component";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="text-blue-900">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center sm:mt-[0]">
        <p className=" text-[rgba(56,0,223,0.77)] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Data Analyst Hub.
        </h1>
        <div className="flex justify-center items-center bg-white rounded-lg m-4">
          <p className="md:text-4xl sm:text-3xl text-l font-bold py-4">
            OUR SERVICES ARE
          </p>
          <ReactTyped
            className="md:text-4xl sm:4xl text-l font-bold md:pl-4 pl-2"
            strings={[
              "DATA SCIENCE",
              "DATA VISUALIZATION",
              "MACHINE LEARNING",
              "DATA ANALYSIS",
              "RESEARCH",
              "CONSULTING",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-xl font-bold text-white">
          EXCELLENCT & AFFORDABLE SERVICES
        </p>
        <button
          onClick={() => navigate("services")}
          className="bg-blue-900 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
