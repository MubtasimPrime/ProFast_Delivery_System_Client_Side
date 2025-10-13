import { NavLink } from "react-router";
import Logo from "../../assets/logo.svg";
import FB from "../../assets/facebook.svg";
import LD from "../../assets/linkedin.svg";
import GT from "../../assets/github-mark-white.svg";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center rounded-4xl py-15 px-30 text-white footer-bg">
      <nav>
        <div className="text-[32px] font-extrabold flex relative">
          <img src={Logo} alt="logo" />
          <div className="absolute ml-5 mt-7">Profast</div>
        </div>
        <p className="text-[#DADADA] max-w-3xl mx-auto mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </nav>
      <hr className="border border-dashed w-full border-[#03464D]" />
      <nav className="grid grid-flow-col gap-8">
        <NavLink className="link link-hover">Services</NavLink>
        <NavLink className="link link-hover">Coverage</NavLink>
        <NavLink className="link link-hover">About Us</NavLink>
        <NavLink className="link link-hover">Pricing</NavLink>
        <NavLink className="link link-hover">Blog</NavLink>
        <NavLink className="link link-hover">Contact</NavLink>
      </nav>
      <hr className="border border-dashed w-full border-[#03464D]" />
      <nav>
        <div className="grid grid-flow-col gap-4">
          <NavLink>
            <img src={FB} alt="" />
          </NavLink>
          <NavLink>
            <img src={LD} alt="" />
          </NavLink>
          <NavLink>
            <img className="w-9 h-9" src={GT} alt="" />
          </NavLink>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Md.
          Mubtasim Fuad
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
