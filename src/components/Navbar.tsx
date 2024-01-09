"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClientOnly } from "@/utills/client-only";
import { RiArrowDropDownLine, RiShoppingBagLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdForwardToInbox,MdOutlinePages , MdLogin} from "react-icons/md";
import { FaPhoneAlt,FaHome,FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  const [isNavExpanded, setIsNavExapanded] = useState(false);

  const handleNav = () => {
    setIsNavExapanded(!isNavExpanded);
  };

  return (
    <ClientOnly>
      <nav className="w-full">
        <div className="h-[48px] bg-[#143A79] md:flex w-full py-[8px] px-[80px] justify-between items-center hidden ">
          <ul className="flex items-center gap-6 font-Barlow">
            <li className="flex items-center gap-1">
              <FaLocationDot size={16} />{" "}
              <span className="">Block B-1 Johar Town Lahore</span>
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <MdForwardToInbox size={16} /> <span> info@greelogix.com</span>
            </li>
            <li className="flex items-center gap-1">
              <FaPhoneAlt size={16} /> <span>+92 333 6527366</span>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-6 font-Barlow">
            <button className="bg-blue-200 py-1 px-3 gap-2 flex items-center rounded-3xl">
              <span className="text-[13px] font-normal">English </span>{" "}
              <RiArrowDropDownLine size={24} />
            </button>

            <button className="bg-blue-200 py-1 px-3 gap-2 flex items-center rounded-3xl">
              <span className="text-[13px] font-normal">USD($)</span>{" "}
              <RiArrowDropDownLine size={24} />
            </button>
          </div>
        </div>

        <div className="md:h-[120px] h-[72px] z-50 bg-[#E9F0FB] flex w-full md:px-[80px] px-8 justify-between items-center fixed md:relative">
          <div className="flex items-center gap-[80px]">
            <div className="flex items-center gap-4">
              <Image
                src="/nav-logo.svg"
                width={56}
                height={56}
                alt="Nav logo"
              />
              <h1 className="text-3xl font-medium font-Montserrat">Fashion</h1>
            </div>

            <ul className=" md:flex items-center gap-[40px] hidden">
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Home
              </li>

              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Shop
              </li>
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Pages
              </li>
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                {" "}
                Elements
              </li>
            </ul>
          </div>
          <div className="md:inline-flex items-center flex-end gap-6 hidden">
            <CiSearch size={32} />
            <RiShoppingBagLine size={32} />
            <button className="flex py-3 px-5 items-center bg-[#143A79] rounded-[800px] text-base uppercase font-semibold font-Barlow">
              Register
            </button>
            <button className="flex py-3 px-5 items-center bg-white rounded-[800px] text-base uppercase font-semibold border-[#143A79] border font-Barlow">
              Login
            </button>
          </div>
          {/* small screen size */}
          <div
            onClick={handleNav}
            className="max-md:block top-2 right-[20px] w-10 hidden"
          >
            {isNavExpanded ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
          <div className={isNavExpanded ? 'h-full fixed absodlute left-0 top-0 w-full mx-auto z-50 block mt-16  ease-in-out flex-col md:hidden' : 'absolute left-[-100%]'}>
                    <ul onClick={handleNav} className='w-full h-full bg-white flex flex-col gap-6  py-4 px-6'>

                        <li className='w-full flex gap-4 items-center rounded-lg p-4 hover:bg-[#143A79]'> 
                        <FaHome size={24} />
                        <Link href="/" className="font-medium text-lg font-Montserrat">Home </Link>
                        </li>
                   

                        <li className='w-full flex gap-4 items-center p-4 hover:bg-[#143A79] rounded-lg'>
                        <FaShoppingCart size={24} />
                          <Link  href="/about" className="text-base font-medium font-Montserrat">About Us </Link>
                          </li>

                        <li className='w-full flex gap-4 items-center p-4 hover:bg-[#143A79] rounded-lg'>
                        <MdOutlinePages size={24}/>  
                        <Link  href="/contact" className="text-base font-medium font-Montserrat">Contact Us </Link> 
                        </li>

                        <li className='w-full flex gap-4 items-center p-4 hover:bg-[#143A79] rounded-lg'>
                        <MdLogin />
                        <Link className="text-base font-medium font-Montserrat" href="/login">Login</Link> 
                        </li>


                    </ul>
                </div>


          
        </div>
      </nav>
    </ClientOnly>
  );
};

export default Navbar;
