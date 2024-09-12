import React, { useEffect } from "react";
import gsap from "gsap";
const Loader = () => {
  var tl = gsap.timeline();

  useEffect(() => {
    tl.from(".text h1", {
      y: 70,
      opacity: 0,
      duration: 1,
      onComplete:()=>{
           gsap.set(".text h1",{display:"none"})
      },
      stagger: 0.1,
    });
    tl.to(".loded", {
      scaleY: 0,
      transformOrigin: "bottom left",
      stagger: 0.1,
      duration: 2,
      onComplete: () => {
        gsap.set(".loader", { display: "none" }); // loader ko animation ke baad hide karo
      },
      ease: "power2.inOut",
    });

  }, []);

  return (
    <div className="loader pointer-events-none w-full h-screen fixed top-0 z-[99999]">
      <div className="relative grid xl:grid-cols-9 w-full xl:h-screen grid-cols-4 min-h-[300vh] grid-rows-0 sm:grid-cols-5 lg:grid-cols-7 md:grid-cols-6 ">
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
        <div className="loded bg-black"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text flex gap-2">
          <h1 className="num px-3 bg-white font-medium py-2 rounded-full uppercase  one">
            loading
          </h1>
          <h1 className="num px-3 bg-white py-2 rounded-full uppercase font-medium one">
            plz
          </h1>
          <h1 className="num px-3 bg-white py-2 rounded-full uppercase font-medium one">
            wait
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
