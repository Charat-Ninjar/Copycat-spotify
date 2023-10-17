import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const NavbarHero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 pt-4 pl-4">
        <div className="bg-opacity-75 bg-black rounded-full h-8 w-8 flex items-center justify-center">
          <MdArrowBackIosNew className="fill-white h-5 w-5" />
        </div>
        <div className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
          <MdArrowForwardIos className="fill-white h-5 w-5" />
        </div>
      </div>
      <div className="flex gap-3 pt-4 pr-5">
        <div className=" bg-opacity-80 flex justify-center items-center gap-1 text-white bg-black rounded-full p-1 px-3">
          <BsArrowDownCircle className="fill-white scale-125" />
          <div className="hover:cursor-pointer font-bold ">Install App</div>
        </div>
        <div className="flex justify-center items-center  text-white bg-opacity-80 bg-black rounded-full h-8 w-8 hoverable-item">
          <div className="flex justify-center items-center mt-1.5 static">
            <IoIosNotificationsOutline className="h-5 w-5" />
            <div className="absolute tooltip w-24">What's New</div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white bg-opacity-80 bg-black rounded-full h-8 w-8 hoverable-item">
          <div className="flex justify-center items-center mt-1.5 static">
            <CgProfile className="h-5 w-5" />
            <div className="absolute tooltip w-fit -ml-12">Mr.Profile aasdasd </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHero;
