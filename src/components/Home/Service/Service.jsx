import React from "react";
import {
  FaTruck,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt,
} from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const Service = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: `We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.`,
      icon: <FaTruck className="w-14 h-14 text-blue-600" />,
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <FaGlobeAsia className="w-14 h-14 text-green-600" />,
    },
    {
      title: "Fulfillment Solution",
      desc: "We offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
      icon: <FaWarehouse className="w-14 h-14 text-yellow-600" />,
    },
    {
      title: "Cash on Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaMoneyBillWave className="w-14 h-14 text-emerald-600" />,
    },
    {
      title: "Corporate Logistics Contracts",
      desc: "Customized corporate services including warehouse and inventory management support.",
      icon: <FaHandshake className="w-14 h-14 text-indigo-600" />,
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaUndoAlt className="w-14 h-14 text-rose-600" />,
    },
  ];
  return (
    <section className="bg-[#03373D] rounded-4xl py-25 mb-25">
      <div className="text-center">
        <h1 className="font-extrabold text-[40px] text-white mb-4">
          Our Services
        </h1>
        <p className="font-medium text-[#DADADA] max-w-3xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
          {services.map((service, idx) => (
            <ServicesCard key={idx} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
