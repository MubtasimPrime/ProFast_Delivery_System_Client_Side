import React from "react";
import Merchant_logo from "../../assets/location-merchant.png";
import { NavLink } from "react-router";

const Merchant = () => {
  return (
    <section className="max-w-7xl mx-auto rounded-4xl bg-[#03373d] bg-[url(assets/be-a-merchant-bg.png)] p-20 bg-no-repeat mb-25">
      <div className="flex justify-between w-full">
        {/* Text */}
        <div className="w-[60%]">
          <h1 className="text-white font-extrabold text-[40px] leading-12 mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-[#DADADA] max-w-[516px] mb-4">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          {/* Btn */}
          <div className="flex gap-6">
            <NavLink className="py-3 px-8 border bg-[#caeb66] rounded-4xl font-bold text-[20px] text-[#303030] outline-none border-[#caeb66] hover:border-[#c7c2c2] hover:bg-transparent hover:text-[#caeb66] transition duration-300">
              Become a Merchant
            </NavLink>

            <NavLink className="text-[#caeb66] py-3 px-8 border border-gray-300 rounded-4xl font-bold text-[20px] hover:bg-[#caeb66] transition duration-300 hover:border-[#caeb66] hover:text-[#303030]">
              Earn with Profast Courier
            </NavLink>
          </div>
        </div>
        {/* Image */}
        <div className="w-[40%]">
          <img src={Merchant_logo} alt="merchant" />
        </div>
      </div>
    </section>
  );
};

export default Merchant;
