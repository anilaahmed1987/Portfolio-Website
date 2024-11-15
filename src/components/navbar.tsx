/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-require-imports */
"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0 '>
        <header className="text-gray-600 body-font ">
  <div className=" container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    <Image src={require("../../public/assests/picture/logo black.png")}
    alt='anila developer'
    width={100}
    height={100}
    className='[50px]'
    />

     
      <span className="ml-3 text-xl">ANILA DEVELOPER</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      <Link target='blank' href={"/"}  className="mr-5 hover:text-gray-900">Home </Link>
      <Link target='blank' href={"#about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link target='blank' href={"#skill"} className="mr-5 hover:text-gray-900">Skills</Link>
      <Link target='blank' href={"#project"} className="mr-5 hover:text-gray-900">Projects</Link>
      <Link target='blank' href={"#contact"} className="mr-5 hover:text-gray-900">Contacts</Link>
    </nav>
    
     <a target='blank'  href="https://milestone1-static-resume-nine.vercel.app">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download CV
    
      <AiOutlineCloudDownload className='text-xl ml-2' />
    </button>
      </a>
  </div>
</header>

      
    </div>
  )
}

export default Navbar
