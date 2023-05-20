import React from "react";
import IMG_0549_lowres from "../assets/IMG_0549_lowres.jpg";

const About = () => {
  return (
    <div id="about" className="section md:px-20">
      <h2>About Me</h2>
      <div className="flex gap-2 flex-block">
        <img
          className="w-48 h-48 m-auto shadow-2xl rounded-3xl"
          src={IMG_0549_lowres}
          alt="Profile Picture"
        />
        <div className="grid flex-auto gap-4 m-auto sm:grid-cols-3 sm:pl-2">
          <div>
            <ol className="about-list">
              <h3 className="text-lg font-semibold text-[#4B1300]">
                Personality
              </h3>
              <li>Positive</li>
              <li>Analytical</li>
              <li>Diligent</li>
              <li>Ambitious</li>
            </ol>
          </div>
          <div>
            <ol className="about-list ">
              <h3 className="text-lg font-semibold text-[#4B1300]">Skills</h3>
              <li>Javascript</li>
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
            </ol>
          </div>
          <div>
            <ol className="about-list">
              <h3 className="text-lg font-semibold text-[#4B1300]">Hobbies</h3>
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
