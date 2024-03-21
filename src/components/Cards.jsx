import React from "react";
import Single from "../assets/Single.png";
import Double from "../assets/Double.png";
import Triple from "../assets/Triple.png";
import { useNavigate } from "react-router-dom";
function Cards() {
  const navigate = useNavigate();
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />

          <p className="text-center text-4xl font-bold text-blue-900">DATA</p>
          <div className="text-center ">
            <p className="py-2 border-b mx-8 mt-8 uppercase">
              We provide remote and onsite services and can handle your data
              projects seamlessly
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="bg-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Email us
          </button>
        </div>
        <div className="w-full bg-gray-100 border shadow-xl flex flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />

          <p className="text-center text-4xl font-bold text-blue-900">
            ANALYST
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 uppercase">
              We deliver excellent and world class services
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-blue-900"
          >
            Book An Appointment
          </button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />

          <p className="text-center text-4xl font-bold text-blue-900">HUB</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 uppercase">
              We are a team of highly skilled Data Scientist and Analyst
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            className="bg-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Call us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
