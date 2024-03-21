import React from "react";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4 sm:hidden">
      <div className="m-width-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We would really love to hear from you
          </h1>
          <p>Send us an email right now </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-blue-900 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <ul className="text-blue-900">
              <Link to="policy">Privacy Policy.</Link>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
