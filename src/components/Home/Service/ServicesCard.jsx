import React from "react";

const ServicesCard = ({ service }) => {
  const { title, desc, icon } = service;

  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gray-100 rounded-full p-4 mb-2">{icon}</div>
      <h3 className="font-bold text-2xl primary-green">{title}</h3>
      <p className="primary-gray font-medium">{desc}</p>
    </div>
  );
};

export default ServicesCard;
