import React from "react";
import IMG_0549_lowres from "../assets/IMG_0549_lowres.jpg";

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-stone-100">
      <h1 className="py-4 text-4xl font-bold text-center text-[#4B1300]">
        About Me
      </h1>
      <img
        className="w-48 h-48 m-auto rounded-full"
        src={IMG_0549_lowres}
        alt="Profile Picture"
      />
    </div>
  );
};

export default About;
