import { FaTruck, FaMoneyBillWave, FaBoxOpen, FaClock } from "react-icons/fa";

const Works = () => {
  const details = [
    {
      title: "Booking Pick & Drop",
      desc: "Schedule your parcel pickups and drops with ease — reliable and door-to-door delivery anytime.",
      icon: <FaTruck className="w-14 h-14 text-blue-600" />,
    },
    {
      title: "Cash On Delivery",
      desc: "Provide your customers with the convenience of paying only after the parcel is delivered.",
      icon: <FaMoneyBillWave className="w-14 h-14 text-green-600" />,
    },
    {
      title: "Secure Packaging",
      desc: "Every package is packed safely to ensure it reaches its destination in perfect condition.",
      icon: <FaBoxOpen className="w-14 h-14 text-yellow-600" />,
    },
    {
      title: "On-Time Delivery",
      desc: "Our logistics network ensures your parcel arrives at its destination right on schedule.",
      icon: <FaClock className="w-14 h-14 text-red-600" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mb-25">
      <h1 className="primary-green font-extrabold text-[32px] mb-8">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-8 rounded-3xl hover:shadow-md transition bg-white hover:scale-105 duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-bold text-[20px] mb-4 primary-green">
              {item.title}
            </h3>
            <p className="primary-gray text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
