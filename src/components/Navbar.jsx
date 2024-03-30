import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 m-auto max-w-[1240px] px-4 text-white ">
      <div className="">
        <img className="w-36 h-44 rounded-full" src={Logo} />
      </div>
      <ul className="hidden md:flex">
        <NavLink
          to="/"
          className=" lg:text-xl sm:text p-4 font-bold hover:bg-blue-900 rounded  active:bg-blue-700"
        >
          Home
        </NavLink>
        <NavLink
          to="company"
          className="p-4 lg:text-xl sm:text font-bold  hover:bg-blue-900 rounded  active:bg-blue-700"
        >
          Company
        </NavLink>

        <NavLink
          to="about"
          className="p-4 lg:text-xl sm:text font-bold  hover:bg-blue-900 rounded  active:bg-blue-700"
        >
          About
        </NavLink>
        <NavLink
          to="services"
          className="p-4 lg:text-xl sm:text font-bold  hover:bg-blue-900 rounded  active:bg-blue-700 "
        >
          Services
        </NavLink>

        <NavLink
          to="contact"
          className="p-4 lg:text-xl sm:text font-bold  hover:bg-blue-900 rounded active:bg-blue-700"
        >
          Contact
        </NavLink>
      </ul>
      <div onClick={handleNav} className="bg-blue-900 block md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-[60%]  bg-blue-900 rounded ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <div className="">
          <img className="w-24 sm:h-24 rounded-full m-4" src={Logo} />
        </div>
        <ul className="uppercase p-4 flex flex-col">
          <NavLink
            to="services"
            className="p-4 border-b border-gray-600   hover:bg-red-500  rounded"
          >
            services
          </NavLink>
          <NavLink
            to="company"
            className="p-4 border-b border-gray-600  hover:bg-red-500 rounded"
          >
            Company
          </NavLink>
          <NavLink
            to="about"
            className="p-4 border-b border-gray-600  hover:bg-red-500 rounded"
          >
            about
          </NavLink>
          <NavLink to="contact" className="p-4  hover:bg-red-500 rounded">
            Contact
          </NavLink>
          <NavLink
            to="/"
            className=" lg:text-xl sm:text p-4 hover:bg-red-500 rounded"
          >
            Home
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
