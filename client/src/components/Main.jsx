import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="object-cover object-left w-full h-screen"
        src="https://images.unsplash.com/photo-1680963550831-e3d6791899fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/50">
        <div className="text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            I'm Luuka Lindgren
          </h1>
          <h4 className="flex pt-4 text-2xl sm:text-3xl">
            <TypeAnimation
              className="pl-1 text-gray-300 text-l"
              sequence={[
                "BSc (Tech)",
                2000,
                "Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h4>
          <div className="flex justify-between pt-4 max-w-[200px] w-full">
            <a href="https://github.com/Luukalindgren">
              <FaGithub
                className="m-2 duration-200 ease-in cursor-pointer hover:scale-110"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/luukalindgren/">
              <FaLinkedin
                className="m-2 duration-200 ease-in cursor-pointer hover:scale-110"
                size={30}
              />
            </a>
            <a href="https://www.instagram.com/luukalindgren/">
              <FaInstagram
                className="m-2 duration-200 ease-in cursor-pointer hover:scale-110"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
