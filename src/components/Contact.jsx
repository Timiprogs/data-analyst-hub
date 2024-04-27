import React, { useRef } from "react";

function Contact() {
  // form = useRef();
  // const sendEmail = () => {};

  return (
    <div className="mt-10 bg-white text-blue-500  h-[700px] w-full">
      <h1 className="text-blue-900 md:text-3xl sm:2xl m-4 pt-4 font-bold uppercase text-center  ">
        SEND AN EMAIL
      </h1>

      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="bg-blue-900   p-10 h-[650px] border-r-4 "
      >
        <input
          type="text"
          placeholder=" Full Name"
          name="user_name"
          required
          className=" block w-[240px] sm:w-[600px] m-auto py-2 placeholder:pl-4"
        />
        <input
          type="email"
          placeholder=" Email "
          name="user_email"
          required
          className="block w-[240px] sm:w-[600px] my-8 mx-auto py-2 placeholder:pl-4"
        />
        <input
          type="text"
          placeholder=" Subject"
          name="subject"
          required
          className="my-8 mx-auto block w-[240px] sm:w-[600px] py-2 placeholder:pl-4"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Type your mail here"
          className="my-8 mx-auto md:w-[600px] sm:w-[150px] placeholder:pl-4 pt-4 block text-blue"
        ></textarea>
        <button
          type="submit"
          className="block bg-white w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-blue-900"
        >
          Send Message
        </button>
        <p className="text-white font-bold text-sm leading-4">
          {" "}
          Daniella Ojekere
        </p>
        <p className="text-white font-bold text-sm">
          Data Scientist Data Analyst Hub
        </p>
        <p className="text-white font-bold sm leading-4">
          Chief Technical Officer : Transport Aid Initiative
        </p>
        <p className="text-white font-bold text-sm">Contact: +2348114547997 </p>
      </form>
    </div>
  );
}

export default Contact;
