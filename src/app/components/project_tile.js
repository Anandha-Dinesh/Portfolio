import React, { useState } from "react";
import { infos } from "../../../public/images/info";

const ProjectTile = ({ title, description, url, stack }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="relative w-64 h-44 bg-transparent border border-x-cyan-50 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 m-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute text-gray-300 inset-0 flex flex-col items-center justify-center p-4">
        <h3 className="text-xl  font-bold text-center text-white text-pretty">
          {title}
        </h3>
        <div>{stack}</div>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 text-pretty">
          <p className="text-white text-left text-pretty">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
