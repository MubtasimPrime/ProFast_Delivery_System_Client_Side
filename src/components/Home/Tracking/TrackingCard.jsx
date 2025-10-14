import React from "react";

const TrackingCard = ({ item }) => {
  const { img, title, desc } = item;
  return (
    <section className="bg-white p-8 rounded-3xl">
      <div className="flex justify-between items-center gap-2">
        {/* Img */}
        <div className="flex-shrink-0">
          <img
            className="w-50 h-50 object-contain"
            src={img}
            alt="Track Image"
          />
        </div>

        {/* Vertical dashed line */}
        <div className="h-40 border-l border-dashed border-[#03373d] mx-6"></div>

        {/* text */}
        <div>
          <h1 className="font-extrabold text-2xl primary-green">{title}</h1>
          <p className="primary-gray font-medium">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default TrackingCard;
