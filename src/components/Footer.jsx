import React from "react";
import Logo from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitterSquare,
  FaCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-blue-900">
      <div className=" ">
        <h1 className="w-full text-3xl font-bold text-red-600">
          DATA ANALYST HUB
        </h1>
        <p className="py-4 font-bold">
          A research firm into research, analysis, business intelligence,
          trainings and consulting.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <a
            href="https://web.facebook.com/Dataanalysthub"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://twitter.com/DataAnalystHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare size={30} />
          </a>
          <FaWhatsapp size={30} />
        </div>
      </div>
      <div className="col-span-2 flex justify-between mt-6 ">
        <div>
          <h6 className="font-medium text-red-600">Company</h6>
          <ul className="m-2">
            <NavLink to="about" className="py-2 text-sm mr-2 block">
              About
            </NavLink>

            <NavLink to="contact" className="py-2 text-sm mr-2">
              Contacts
            </NavLink>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-red-600 mx-2">Further information</h6>
          <ul>
            <NavLink to="policy" className="pl-2 text-sm">
              Privacy Policy
            </NavLink>
          </ul>
        </div>

        <img
          className="w-20 h-20 rounded-full  m-2"
          src={Logo}
          alt="there is a logo here"
        />

        <span className="font-bold">
          <FaCopyright size={30} /> 2023 Designed by Timiprogs
        </span>
      </div>
    </div>
  );
}

export default Footer;
