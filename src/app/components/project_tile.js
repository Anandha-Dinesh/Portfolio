import React, { useState } from "react";

const ProjectTile = ({ title, description, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="relative w-64 h-64  bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute text-gray-100 inset-0 flex items-center justify-center p-4">
        <h3 className="text-xl  font-bold text-center text-gray-800 text-pretty">
          {"result scrapper"}
        </h3>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 text-pretty">
          <p className="text-white text-center">{"description"}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
