import React from "react";
import { useNavigate } from "react-router-dom";
import Laptop from "../assets/Laptop.jpg";

function Analytics() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-8">
        <img
          className="w-[500px] h-[300px] rounded mx-auto my-4"
          src={Laptop}
          alt="there is a laptop image here"
        />
        <div className="flex flex-col justify-self-center">
          <p className="text-blue-900 font-bold"> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-blue-900 ">
            Manage Data Your Analytics With Us
          </h1>
          <div className="">
            <p className="md:text-xl sm:text-sm">
              {" "}
              Data Science (Python, R, Microsoft Excel)
            </p>
            <p className="md:text-xl sm:text-sm">
              {" "}
              Data Visualization (Power Bi, Tableau)
            </p>
            <p className="md:text-xl sm:text-sm">
              {" "}
              Machine Learning:(Python, R)
            </p>
            <p className="md:text-xl sm:text-sm">
              {" "}
              Data Analysis(Interpretation And Modeling)
            </p>
            <p className="md:text-xl sm:text-sm"> Research and Consulting</p>
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

export default Analytics;
