import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const Fotter = () => {
 

  useEffect(() => {
    gsap.to(".elem", {
      y: "0",
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".fotter",

        start: "top -35%",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <>
      <div className="fotter min-h-[100vh]  w-full">
        <div className="min-h-screen w-full px-8 lg:items-start  pt-32 lg:flex xl:flex justify-between">
          <div className="relative xl:w-[50%] lg:w-1/2 lg:h-[80vh] xl:h-[100vh] h-[60vh] rounded-lg xl:rounded-none text-white bg-[#212826] flex flex-col py-7 justify-between pl-8">
            <div className="flex flex-col gap-2 items-start">
              <h1 className="px-4 bg-[#2B3230] text-xl rounded-full py-1">
                Alstro
              </h1>
              <h1 className=" px-4 hidden xl:block bg-[#2B3230] py-1`">
                Grounded by science.Rooted in Nature
              </h1>
            </div>
            <div className='w-[80%] h-[60%] absolute top-1/2 left-1/2 rounded-lg -translate-y-1/2 -translate-x-1/2 bg-[url("https://images.prismic.io/toyfight/ZmCN6pm069VX1fPc_ImageHome.jpg?auto=format%2Ccompress&rect=0%2C157%2C2160%2C1636&w=1116&fit=clip")] bg-cover bg-center'></div>
            <div className="flex gap-3 items-center">
              <h1 className=" px-2 text-xs bg-[#2B3230]">branding</h1>
              <h1 className=" px-2 text-xs bg-[#2B3230]">marketing</h1>
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-[49%] h-screen lg:pt-0 pt-12 xl:p-0 xl:flex flex-col gap-14 items-end xl:px-8 ">
            <div className="xl:w-[65%]  relative py-4 text-white flex flex-col justify-between items-end xl:px-8 h-[65vh] rounded-md bg-[#212826]   ">
              <div className="flex flex-col  text-white gap-2 items-end ">
                <h1 className="px-4 bg-[#2B3230] text-xl rounded-md  py-2">
                  Gsap
                </h1>
                <h1 className=" px-4 rounded-full py-1 bg-[#2B3230] py-1`">
                  Animate Anything
                </h1>
              </div>
              <div className=" w-[70%] absolute sm:w-[60%] sm:top-[45%]  -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 h-[40%] ">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/gsap/gsap-work-home.webm?_a=DATAdtAAZAA0"
                ></video>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className=" xl:px-2 text-xs bg-[#2B3230]">Branding</h1>
                <h1 className=" xl:px-2 text-xs bg-[#2B3230]">Website</h1>
                <h1 className=" xl:px-2 text-xs bg-[#2B3230]">Marketing</h1>
                <h1 className=" xl:px-2 text-xs bg-[#2B3230]">eCommerce</h1>
                <h1 className=" xl:px-2 text-xs bg-[#2B3230]">Content</h1>
              </div>
            </div>
            <div className="flex flex-col pt-11 xl:pt-0 gap-2 items-end">
              <h1 className=" text-4xl">Latest</h1>
              <div className="flex justify-end gap-2 text-xs">
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#FDEDD4]">
                  Awards
                </h1>
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#f0f0f0]">
                  2* Webby Wins with GSAP
                </h1>
              </div>
              <div className="flex justify-end gap-2 text-xs">
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#E9E3F3]">
                  News
                </h1>
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#f0f0f0]">
                  Toy fight partner With Cult Gaia for New App
                </h1>
              </div>
              <div className="flex justify-end gap-2 text-xs">
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#FFF490]">
                  Open Position
                </h1>
                <h1 className=" xl:px-3 px-1 py-1 rounded-md bg-[#f0f0f0]">
                  We're hiring multiple roles
                </h1>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Fotter;
