import React from "react";
import Navbar from "./Navbar";
import company from "../assets/company.jpg";

function Company() {
  return (
    <div className="bg-white m-20 p-10 text-blue-900 ">
      <h1 className="font-bold text-4xl mb-8 text-center">Our Company</h1>
      <p className="p-4 rounded-lg font-sans text-xl border-solid border-2 border-indigo-600 ">
        Welcome to Data Analyst Hub where innovation meets insight. As a
        cutting-edge research firm, we take pride in our commitment to
        unraveling the complexities of data and transforming it into actionable
        intelligence. Established with a vision to empower businesses through
        data-driven decisions, Data Analyst Hub has become a beacon in the realm
        of data science, analytics, and consulting. We are more than just a data
        analytics company; we are architects of knowledge, harnessing the power
        of data to guide businesses toward success. Our dedicated team of
        experts brings together a wealth of experience in data science, data
        visualization, machine learning, and data analysis. We thrive on
        challenges, using our skills to turn raw data into strategic solutions.
      </p>

      <img
        className=" block h-[700px] xs:h-[200px] mt-6 w-full rounded-lg"
        src={company}
        alt="a company picture is here"
      />

      <h1 className="font-bold text-3xl m-8 text-center"> Our Services </h1>
      <p className="font-sans text-xl border-solid border-4 border-indigo-600 rounded-lg">
        <ol className="p-4">
          <li className="py-2">
            <span className="font-bold mb-8">Data Science:</span> Unlock the
            potential of your data with our expertise in Python, R, and
            Microsoft Excel. We delve into the intricacies of data, employing
            advanced techniques to extract meaningful insights.
          </li>

          <li className="py-2">
            <span className="font-bold sm:font-semibold">
              Data Visualization:{" "}
            </span>
            Transform your data into compelling stories with our proficiency in
            Power BI and Tableau. Our visualization experts create engaging
            dashboards that simplify complex data, aiding in better
            decision-making.
          </li>
          <li className="py-2">
            <span className="font-bold">Machine Learning: </span>
            Embrace the future of technology with our machine learning services
            in Python and R. From predictive modeling to classification, we
            tailor solutions that align with your business objectives.
          </li>
          <li className="py-2">
            <span className="font-bold">Data Analysis:</span> Navigate the world
            of data analysis effortlessly with our interpretation and modeling
            services. We don't just analyze data; we decipher its nuances,
            providing you with a roadmap for success.
          </li>
          <li className="py-2">
            <span className="font-bold">Research and Consulting: </span>Rely on
            our research prowess for in-depth analysis, business intelligence,
            and strategic insights. Our consulting services extend beyond data,
            encompassing comprehensive guidance to fuel your business growth.
            Connect with us by following us on Facebook and Twitter to stay
            updated on the latest trends, insights, and success stories. Join
            our community as we embark on a journey of data-driven excellence
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Company;
