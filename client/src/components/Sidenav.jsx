import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden text-white"
        size={30}
      />
      {nav ? (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[30%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="p-4 m-2 duration-200 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="p-4 m-2 duration-200 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#work"
            className="p-4 m-2 duration-200 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="p-4 m-2 duration-200 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className="p-4 m-2 duration-200 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
