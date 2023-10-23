"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-web";
import animate1 from "../../../public/animate2.json";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#animate2"),
      animationData: animate1,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      Lottie.destroy();
    };
  }, []);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormStatus((prev) => ({
  //     ...prev,
  //     isSubmitting: true,
  //   }));
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formValues),
  //     });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       throw new Error(data.message || "Something went wrong!");
  //     }
  //     setFormStatus((prev) => ({
  //       ...prev,
  //       isSubmitting: false,
  //       isSuccess: true,
  //       message: data.message,
  //     }));
  //   } catch (error) {
  //     setFormStatus((prev) => ({
  //       ...prev,
  //       isSubmitting: false,
  //       isError: true,
  //       message: error.message,
  //     }));
  //   }
  // };

  const handleSubmit = async (e) => {};

  return (
    <div className="container px-4">
      <div
        className={`flex flex-col md:flex-row ${
          formStatus.isSuccess ? "hidden" : ""
        }`}
      >
        <div className="flex-1">
          <div id="animate2" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 md:px-0 text-justify md:text-left">
          <h1 className="text-7xl font-bold mb-4 text-primary">
            Contact
            <span className="text-black"> Us</span>
          </h1>
          <p className="text-lg text-gray-600 leading-8">
            We are always looking for new opportunities to work with businesses
            and individuals. If you have a project in mind, feel free to contact
            us. We would love to hear from you!
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex gap-4 items-center">
              <GiRotaryPhone className="text-3xl text-primary" />
              <a href="tel:+234 000 000 0000" className="text-black">+234 000 000 0000</a>
            </div>
            <div className="flex gap-4 items-center">
              <MdEmail className="text-3xl text-primary" />
              <a href="mailto:" className="text-black">
                info@victorious.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  form with map by the side */}

      <div
        className={`flex flex-col md:flex-row ${
          formStatus.isSuccess ? "" : "hidden"
        }`}
      >
        <div className="flex-1">
          <div id="animate2" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 md:px-0 text-justify md:text-left">
          <h1 className="text-7xl font-bold mb-4 text-primary">
            Thank you for contacting us!
          </h1>
          <p className="text-lg text-gray-600 leading-8">
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div
          className={`flex flex-col md:flex-row ${
            formStatus.isSuccess ? "hidden" : ""
          }`}
        >
          <div className="flex-1 flex flex-col justify-center px-4 md:px-0 text-justify md:text-left">
            <h1 className="text-7xl font-bold mb-4 text-primary">
              Get in touch
            </h1>
            <p className="text-lg text-gray-600 leading-8 mr-8">
              We are always looking for new opportunities to work with
              businesses and individuals. If you have a project in mind, feel
              free to contact us. We would love to hear from you!
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center px-4 md:px-0 text-justify md:text-left">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 border-2 border-primary p-12 rounded-md">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    value={formValues.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+234 000 000 0000"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message here..."
                    value={formValues.message}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md p-2 mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
