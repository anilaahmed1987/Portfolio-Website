 "use client"
 /* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image

     height="300"
     width="300"
     alt="hero"
     src={require("../../public/assests/picture/anila preply pic.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p className="mb-8 leading-relaxed">
        I had completed my <b>BSc</b> in (microbiology,zoology and chemistry) from Karachi University 
        then i did <b>BEd</b>in (Biology and Chemistry),i had done many courses like <b>Business development</b>
        from JDC <b>Digital Marketing , Ecommerce</b> from Alkhidmate programme BANO QABIL 
        currently i am doing <b>ARTIFICIAL INTELLIGENCE ,WEB 3.0,METAVERSE</b>  my passion is to learn
        every new technology according to the new digital world.I have also experience to work 
        with different organization like <b>British Council</b> where i lead 3 year project with the Name 
        <b>Connecting Class Room</b> 
      </p>
      <div className="flex justify-center">
        <a target='blank' href={"/assests/picture/static resume.png"}>
        <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
