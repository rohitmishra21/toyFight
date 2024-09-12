import React, { useEffect } from "react";
import gsap from "gsap";
const Loader = () => {
  var tl = gsap.timeline();

  useEffect(() => {
    tl.from(".text h1", {
      y: 70,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
    tl.to(".loded", {
      scaleY: 0,
      transformOrigin: "bottom left",
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.to(".loader",{
      display:"none"
    })
  }, []);

  return (
    <div className="loader pointer-events-none w-full h-screen fixed z-[99999]">
      <div className="relative grid grid-cols-9 w-full h-screen   ">
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
