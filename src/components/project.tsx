/* eslint-disable @typescript-eslint/no-require-imports */
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div id="project">
      
      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        <br />
        <br />
        My Projects
      </h1>
      
    </div>

    <div className="flex flex-wrap -m-4">
        {/* projects 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/1-google-clone.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              GOOGLE CLONE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed">
             this project is based on next js with html and tailwind css it is clone of Google
            </p>
            <Link target='blank' href={"https://google-clone-cora-one.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
          </div>
        </div>
      </div>
      

        {/* projects 2 */}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/dynamic resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            DYNAMIC RESUME BUILDER
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed">
             this project is based on next js with html and tailwind css it is a dynamic resume builder
            </p>
            <Link target='blank'  href={"https://milestone-3-dynamic-resume-khaki.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
          </div>
        </div>
      </div>
      {/* project 3 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/shareable resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            SHAREABLE RESUME BUILDER
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed">
             this project is based on next js with html and tailwind css it is a shareable resume builder
            </p>
            <Link target='blank'  href={"https://milestone-5-shareable-resume-bice.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
            
          </div>
        </div>
      </div>

      {/* project 4 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/static resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            STATIC RESUME BUILDER
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed">
             this project is based on next js with html and tailwind css it is a static resume builder
            </p>
            <Link target='blank'  href={"https://milestone1-static-resume-nine.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
            
          </div>
        </div>
      </div>
      {/* project 5 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/ph scale.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            PH Scale
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed line-clamp-2">
             this project is based on html and css and this whole ph scale is followed all the rule of designing.
            </p>
            <Link target='blank'  href={"https://ph-scale-6bm7.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
            
          </div>
        </div>
      </div>
      {/* project 6 */}

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          height={100}
          width={100}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require("../../public/assests/picture/E commerce web site.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            E-COMMERCE WEB SITE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              website
            </h1>
            <p className="leading-relaxed line-clamp-2">
             this project is based on next js with html and tailwind css and type script it is a shareable resume builder
            </p>
            <Link target='blank'  href={"https://nextjs-ecommerce-web-site.vercel.app"}>
            <br />
            <button className='bg-red-700 text-xl text-white'>View Project</button>
            
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
