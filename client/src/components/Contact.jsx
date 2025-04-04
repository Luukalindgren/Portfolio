import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

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
          setShowModal(true);
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="section md:px-20">
      <h2>Contact</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="w-full gap-4 py-2 ">
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Name:</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4B1300] focus:ring-1 focus:ring-[#4B1300]"
              type="text"
              name="user_name"
              placeholder="Bill Gates"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Email:</label>
          <input
            className="flex p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4B1300] focus:ring-1 focus:ring-[#4B1300]"
            type="email"
            name="user_email"
            placeholder="bill.gates@microsoft.com"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Subject:</label>
          <input
            className="flex p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4B1300] focus:ring-1 focus:ring-[#4B1300]"
            type="text"
            name="subject"
            placeholder="Job Offer 2023"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Message:</label>
          <textarea
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4B1300] focus:ring-1 focus:ring-[#4B1300]"
            rows="10"
            name="message"
            placeholder="Hello Luuka, we would like to offer you a job at Microsoft..."
          />
        </div>
        <button
          type="submit"
          className="bg-[#4B1300] text-lg font-semibold text-white mt-4 w-full p-4 rounded-lg hover:scale-105 ease-in duration-200"
        >
          Send Email
        </button>
      </form>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
export default Contact;
