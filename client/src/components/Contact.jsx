import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gdn3hr",
        "template_t4wphm9",
        formRef.current,
        "b1NwTuFw7ZhnHVzC8"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="section md:px-20">
      <h2>Contact</h2>
      <p className="text-center">Currently disabled...</p>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="w-full gap-4 py-2 ">
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Name:</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="text"
              name="user_name"
              placeholder="Matti Meikäläinen"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Email:</label>
          <input
            className="flex p-3 border-2 border-gray-300 rounded-lg"
            type="email"
            name="user_email"
            placeholder="matti.meikalainen@gmail.com"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Subject:</label>
          <input
            className="flex p-3 border-2 border-gray-300 rounded-lg"
            type="text"
            name="subject"
            placeholder="Job Offer 2023"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Message:</label>
          <textarea
            className="p-3 border-2 border-gray-300 rounded-lg"
            rows="10"
            name="message"
            placeholder="Hello Luuka, we would like to offer you a job at..."
          />
        </div>
        <button
          type="submit"
          className="bg-[#4B1300] text-white mt-4 w-full p-4 rounded-lg"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default Contact;
