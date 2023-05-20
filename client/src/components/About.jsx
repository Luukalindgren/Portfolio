import React from "react";
import IMG_0549_lowres from "../assets/IMG_0549_lowres.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-stone-100"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-[#4B1300]">
        About Me
      </h1>
      <div className="flex gap-2 flex-block">
        <img
          className="w-48 h-48 m-auto rounded-full shadow-lg"
          src={IMG_0549_lowres}
          alt="Profile Picture"
        />
        <div className="grid flex-auto gap-4 m-auto sm:grid-cols-3 sm:pl-2 md:px-8">
          <div>
            <ol className="about-list">
              <h2 className="text-lg font-semibold text-[#4B1300]">
                Personality
              </h2>
              <li>Positive</li>
              <li>Analytical</li>
              <li>Diligent</li>
              <li>Ambitious</li>
            </ol>
          </div>
          <div>
            <ol className="about-list ">
              <h2 className="text-lg font-semibold text-[#4B1300]">Skills</h2>
              <li>Javascript</li>
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
            </ol>
          </div>
          <div>
            <ol className="about-list">
              <h2 className="text-lg font-semibold text-[#4B1300]">Hobbies</h2>
              <li>Gym</li>
              <li>Reading</li>
              <li>Disc Golf</li>
              <li>Tech</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
