import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1680963550831-e3d6791899fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold ">
            Olen Luuka Lindgren
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4">
            Olen
            <TypeAnimation
              sequence={[
                "kehittäjä",
                2000,
                "koodari",
                2000,
                "tekniikka intoilija",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-4 max-w-[200px] w-full">
            <FaInstagram className="cursor-pointer m-2" size={30} />
            <FaGithub className="cursor-pointer m-2" size={30} />
            <FaLinkedin className="cursor-pointer m-2" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
