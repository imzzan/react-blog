import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-800 h-14">
      <div className=" flex justify-between items-center h-12">
        <div>
          <p className="md:text-sm text-[10px] text-white md:pl-10 pl-2">Created By : Zany</p>
        </div>
        <div className=" flex bg-white rounded-md p-2 md:gap-x-5 gap-x-2 cursor-pointer">
          <BsFacebook className="md:text-2xl text-lg"/>
          <BsGithub className="md:text-2xl text-lg"/>
          <BsTwitter className="md:text-2xl text-lg"/>
          <BsTelegram className="md:text-2xl text-lg"/>
          <BsWhatsapp className="md:text-2xl text-lg"/>
          <BsInstagram className="md:text-2xl text-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
