import React from "react";
import { FcGoogle } from "react-icons/fc";
import LoginImg from "../../assets/authImage.png";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-10 lg:px-24">
        {/* Logo */}
        <NavLink className="dark-text text-[32px] font-extrabold flex absolute top-6 left-10 lg:top-11 lg:left-15 items-center gap-2">
          <img src={Logo} alt="logo" />
          <div className="absolute ml-5 mt-4 ">Profast</div>
        </NavLink>

        {/* Form Container */}
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
            Create an Account
          </h1>
          <p className="mb-8 text-gray-500">Register with Profast</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Image Upload */}
            <div className="flex flex-col mb-5">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-300 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM12 14c-4 0-8 1.9-8 4v2h16v-2c0-2.1-4-4-8-4z" />
                </svg>
              </div>
              <label className="text-sm text-green-600 cursor-pointer hover:underline">
                Upload Image
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            <input
              type="text"
              placeholder="Name"
              {...register("text", { required: true, minLength: 6 })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.type === "required"
                  ? "Name is required"
                  : "Name must be at least 6 characters"}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                validate: {
                  minLength: (v) =>
                    v.length >= 6 || "Password must be at least 6 characters",
                  capital: (v) =>
                    /[A-Z]/.test(v) ||
                    "Must include at least one capital letter",
                  special: (v) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
                    "Must include at least one special character",
                  number: (v) =>
                    /\d/.test(v) || "Must include at least one number",
                },
              })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#CAEB66] text-black font-semibold py-3 rounded-lg hover:bg-[#b8d856] transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </NavLink>
          </p>

          <div className="flex items-center gap-2 my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <FcGoogle className="text-xl" />
            Register with Google
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex w-1/2 bg-[#F7FAEC] items-center justify-center">
        <img src={LoginImg} alt="Delivery Illustration" />
      </div>
    </div>
  );
};

export default Register;
