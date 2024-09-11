import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Header = () => {
 

  const items = ["dire bonjor","dasir boura","☆*: .｡"]

  useEffect(() => {
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -2,
    });

    return () => {};
  }, []);



let tl = gsap.timeline({repeat: -1, repeatDelay: 1})
 
items.forEach(item =>{
  tl.to(".change",{
    text:item,
    duration:1
  })
})
  return (
    <>
      
      <div className="w-full h-screen bg-[#FAF7EE] ">
    
        <nav className="flex justify-between px-2">
          <h1 className="px-2 py-1 lg:hidden bg-black text-yellow-50 text-2xl font-sans xl:hidden uppercase">
            toyfight
          </h1>
          <h1 className="px-2 py-1 xl:hidden lg:hidden  text-2xl font-sans uppercase">
            menu
          </h1>
        </nav>
        <div className="flex lg:relative top-20 justify-center   mt-5">
          <video
            src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/spline-fallbacks/game.webm?_a=DATAdtAAZAA0"
            autoPlay
            muted
            loop
            className="w-80"
          ></video>
        </div>

        <div className="flex justify-center absolute w-full h-fit top-[79%] left-1/2 -translate-y-1/2 -translate-x-1/2   gap-2 flex-col py-1 ">
          <div className="flex items-center justify-center gap-2">
            <h1 className=" px-9 py-2  text-[4vw]   rounded-full bg-[#F1EDE7]">
              The
            </h1>
            <h1 className=" px-8  py-4  font-medium text-[5vw] capitalize  bg-[#F1EDE7]">
              Unmistakeably
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <h1 className=" px-8  py-4   font-medium text-[5vw]  capitalize rounded-full  bg-[#F1EDE7]">
              orignal®
            </h1>
            <h1 className=" px-8  py-4 font-medium text-[5vw] capitalize bg-[#F1EDE7]">
              design
            </h1>
            <h1 className=" px-8  py-2 text-[4vw]  rounded-full capitalize bg-[#FFD8F5]">
              studio
            </h1>
          </div>
          <div className="xl:flex relative bottom-7  w-full xl:justify-between  px-5 ">
            <h1 className="text-center lg:pt-3 pt-12 xl:pt-0">
              creating experiences Since 2015
            </h1>
            <div className="xl:flex gap-2 items-center hidden">
              <h1 className="change px-3  bg-yellow-400 text-xs ">say hii</h1>
              <h1 className="text-xs">hellow@toyfight.co</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
