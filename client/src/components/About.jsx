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
      <div className="flex flex-block ">
        <img
          className="w-48 h-48 m-auto rounded-full shadow-lg"
          src={IMG_0549_lowres}
          alt="Profile Picture"
        />
        <div className="grid flex-auto gap-4 px-8 m-auto sm:grid-cols-3">
          <div>
            <ol className="about-list">
              <h2 className="text-lg font-semibold text-[#4B1300]">
                Personality
              </h2>
              <li>Outgoing</li>
              <li>Positive</li>
              <li>Always learning</li>
            </ol>
          </div>
          <div>
            <ol className="about-list">
              <h2 className="text-lg font-semibold text-[#4B1300]">Skills</h2>
              <li>Programming 6/5</li>
              <li>Design 4/5</li>
              <li>People skills 0/5</li>
            </ol>
          </div>
          <div>
            <ol className="about-list">
              <h2 className="text-lg font-semibold text-[#4B1300]">Hobbies</h2>
              <li>Gym</li>
              <li>Reading</li>
              <li>Disc Golf</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
