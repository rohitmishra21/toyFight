import React from 'react'
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap"
gsap.registerPlugin(TextPlugin);

const End = () => {
    useEffect(() => {
        const words = ["inovent", "intresting", "unmistakbly"];
        const means = ["agency", "team"];
        let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Repeat indefinitely with a delay
    
        words.forEach((word) => {
          tl.to(".text", {
            text: word,
            duration: 2, // Slow display time (increase for slower effect)
            ease: "power1.inOut", // Smooth easing
            delay: 1,
          });
        });
        means.forEach((mean) => {
          tl.to(".mean", {
            text: mean,
            duration: 1,
            ease: "power1.inOut",
          });
        });
      }, []);
  return (
    <div className="h-fit  bg-[#F1EDE7] ">
    <div className="last overflow-hidden flex justify-center pt-12 items-center gap-3 xl:text-2xl">
      <h1 className="elem translate-y-[100%] overflow-x-hidden xl:px-3 px:2 py-1 bg-white">
        The
      </h1>
      <h1 className="elem translate-y-[100%] overflow-x-hidden text xl:px-3 px:2 py-1 rounded-full bg-white">
        {" "}
        telented{" "}
      </h1>
      <h1 className="elem translate-y-[100%] overflow-x-hidden xl:px-3 px:2 py-1 bg-white">
        {" "}
        collection{" "}
      </h1>
      <h1 className="elem translate-y-[100%] overflow-x-hidden mean xl:px-3 px:2 py-1 bg-white ">
        {" "}
        of artist
      </h1>
    </div>
    <div className="xl:pt-20 text-xs flex flex-col text-center gap-2 items-center justify-center  xl:flex-row xl:justify-between xl:px-8">
      <div className="xl:flex pt-3 gap-4">
        <h1 className="">©2024 ToyFight® All Rights Reserved</h1>
        <h1>Privacy Policy</h1>
      </div>
      <div className="xl:flex gap-4">
        <h1>General Enquiries</h1>
        <h1>hello@toyfight.co</h1>
      </div>
      <div className="xl:flex gap-4">
        <h1> LinkedIn </h1>
        <h1> Instagram </h1>
        <h1> Dribbble </h1>X
      </div>
    </div>
  </div>
  )
}

export default End