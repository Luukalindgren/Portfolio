import React from "react";

const ProjectItem = ({
  img,
  title,
  desc,
  sourceLink,
  secondaryLink,
  showOverlay,
  onClick,
}) => {
  const overlayStyle = showOverlay
    ? "opacity-100 visible"
    : "opacity-0 invisible";

  return (
    <div className="duration-200 shadow-xl shadow-gray-400 rounded-xl group md:hover:scale-105">
      <div className="relative w-full aspect-video">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full cursor-pointer rounded-xl"
          onClick={() => onClick(title)}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center text-center transition-opacity duration-200 ${overlayStyle} bg-gradient-to-r from-gray-800/30 to-[#4B1300]/80 rounded-xl md:group-hover:opacity-100 md:group-hover:visible`}
          onClick={() => onClick(title)}
        >
          <div>
            <h3 className="text-2xl font-bold tracking-wider text-white">
              {title}
            </h3>
            <p className="pt-2 pb-4 text-white">{desc}</p>
            <div className="inline-flex gap-3">
              {sourceLink && (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block duration-200 ease-in hover:scale-105"
                >
                  <p className="p-3 text-lg font-bold text-gray-700 bg-white rounded-lg cursor-pointer min-w-[100px]">
                    Source
                  </p>
                </a>
              )}
              {secondaryLink && (
                <a
                  href={secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block duration-200 ease-in hover:scale-105"
                >
                  <p className="p-3 text-lg font-bold text-gray-700 bg-white rounded-lg cursor-pointer min-w-[100px]">
                    Website
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
