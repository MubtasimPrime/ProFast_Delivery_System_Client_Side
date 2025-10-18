import React from "react";
import { FcGoogle } from "react-icons/fc";
import LoginImg from "../../assets/authImage.png";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-10 lg:px-24">
        {/* Logo */}
        <NavLink
          className="dark-text text-[32px] font-extrabold flex absolute top-6 left-10 lg:top-11 lg:left-15 items-center gap-2"
          to={"/"}
        >
          <img src={Logo} alt="logo" />
          <div className="absolute ml-5 mt-4 ">Profast</div>
        </NavLink>

        {/* Form Container */}
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
            Welcome Back
          </h1>
          <p className="mb-8 primary-gray">Login with Profast</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
              {...register("password", { required: true })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            <div className="text-right">
              <NavLink className="text-sm text-green-600 hover:underline">
                Forget Password?
              </NavLink>
            </div>
            <button
              type="submit"
              className="bg-[#CAEB66] text-black font-semibold py-3 rounded-lg hover:bg-[#b8d856] transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have any account?{" "}
            <NavLink
              to="/register"
              className="text-green-600 font-medium hover:underline"
            >
              Register
            </NavLink>
          </p>

          <div className="flex items-center gap-2 my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-xl" />
            Login with Google
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

export default Login;
