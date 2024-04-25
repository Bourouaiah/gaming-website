"use server";

import Image from "next/image";
import { lazy } from "react";

import { FaFacebook, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-[100px] mb-[20px] mx-[10px] sm:mx-[50px] p-[40px] footer-bg rounded-md">
      <div className="flex items-center flex-col lg:flex-row gap-[30px] lg:gap-[100px]">
        <div>
          <Image loading='lazy' src="/logo.png" width={130} height={55} alt="logo" />
        </div>
        <ul className="flex items-center justify-between flex-col sm:flex-row gap-[30px] lg:gap-0 lg:flex-1">
          <li className="text-center lg:text-left">About Us</li>
          <li className="text-center lg:text-left">Sponsorships</li>
          <li className="text-center lg:text-left">Join Us</li>
          <li className="text-center lg:text-left">Terms & Conditions</li>
          <li className="text-center lg:text-left">Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row mt-[40px] gap-[80px]">
        <div className="flex flex-col gap-[40px] lg:w-[65%]">
          <h2 className="text-lg head-title-footer lg:w-fit text-center lg:text-left">Newsletter signup</h2>
          <form className="flex items-center gap-[15px]" action="">
            <input
              className="lg:w-[80%] bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none placeholder:text-slate-600"
              type="email"
              name="mail"
              placeholder="Email address"
            />
            <button className="bg-[#0A1F35] py-1 p-3 rounded-sm">Submit</button>
          </form>
        </div>
        <div className="flex flex-col gap-[40px] lg:w-[35%]">
          <h2 className="text-lg head-title-footer lg:w-fit text-center lg:text-left">Follow us</h2>
          <ul className="flex gap-[25px]">
            <li>
              <FaFacebook className="text-2xl" />
            </li>
            <li>
              <FaInstagram className="text-2xl" />
            </li>
            <li>
              <FaDiscord className="text-2xl" />
            </li>
            <li>
              <FaYoutube className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
