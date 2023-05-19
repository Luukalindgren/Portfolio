import React from "react";

const ProjectItem = ({ img, title, desc, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#4B1300]">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 object-cover h-64 w-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
        <h3 className="text-2xl font-bold text-white tracking-wider">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white">{desc}</p>
        <a href={link}>
          <p className="p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
