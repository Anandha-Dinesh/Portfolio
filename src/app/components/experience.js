import React from "react";

const ExperienceCard = ({ role, company, date, description }) => (
  <div className="flex flex-col mx-4 mb-8 md:flex-row md:space-x-4">
    <div className="flex-1 pl-4  border-gray-300 border-l-4 ">
      <h3 className="text-lg font-semibold text-violet-500">{role}</h3>
      <p className="text-gray-400 text-sm">{company}</p>
      <span className="text-xs text-gray-400">{date}</span>
      <p className="mt-2 text-gray-200 text-pretty">{description}</p>
    </div>
  </div>
);

export default ExperienceCard;
