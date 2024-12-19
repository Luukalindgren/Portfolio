import React from "react";

const ProjectItem = ({ img, title, desc, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200/20 to-[#4B1300]/80">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-64 transition-opacity duration-200 rounded-xl group-hover:opacity-10"
      />
      <div className="absolute inset-0 items-center justify-center hidden text-center transition-all duration-300 bg-black bg-opacity-50 rounded-xl group-hover:flex">
        <div>
          <h3 className="text-2xl font-bold tracking-wider text-white ">
            {title}
          </h3>
          <p className="pt-2 pb-4 text-white">{desc}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block w-[200px] hover:scale-105 ease-in duration-200">
            <p className="p-3 text-lg font-bold text-gray-700 bg-white rounded-lg cursor-pointer ">
              More info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
