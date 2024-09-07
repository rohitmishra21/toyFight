import React from "react";

const Second = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-black mt-7 text-white">
        <div className="h-screen w-full py-20 flex ">
          <div className="w-1/2 h-full flex items-end">
            <h1 className="font-serif text-[2vw] leading-tight px-8">
              Founded in 2015,we'he concentrated on crafting <br /> unparalleled
              expriences for brands through <br /> strategy,design, content,and
              development. <br /> Cluminating in a synthesis of work that's as
              bold as <br /> it is Unmistakably Orignal.{" "}
            </h1>
          </div>
          <div className="w-1/2  h-full pr-8 flex flex-col items-end">
         <div>
          <h1 className="text-[3vw] leading-none capitalize">We have our partners solve</h1>
            <h1 className="text-[3vw] leading-none">for Today While Building </h1>
            <h1 className="text-[3vw] leading-none capitalize">towards tomorrow</h1>
          </div>
         <div>
            <video src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/reels/home-mini-tint-new.webm?_a=DATAdtAAZAA0" className="pt-16"></video>
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
