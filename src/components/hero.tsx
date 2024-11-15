"use client"

/* eslint-disable @typescript-eslint/no-require-imports */
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />

        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX designer',"Teacher","Business Developer,"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-red-700'></div>
      <p className="mb-8 leading-relaxed">
        I am a full stack developer my expertise is in HTML,TailwindCss,Typescript,Nextjs
        UX/UI design ....
      </p>
      <div className="flex justify-center">
        <a  href="#contact" >
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
          Contact
        </button>
        </a>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15re
        
        m]"
        alt="hero"
        src={require("../../public/assests/picture/anila preply pic.jpg")}
        width={500}
        height={500} 
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
