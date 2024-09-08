import React from "react";

const Second = () => {
  return (
    <>
      <div className="xl:min-h-[100vh] min-h-[120vh] px-2 bg-black mt-7 text-white">
        <div className="xl:h-screen lg:flex w-full sm-h-fit py-20  xl:flex ">
          <div className="xl:w-1/2 xl:h-full lg:w-1/2 lg:flex  xl:flex items-end">
            <h1 className="font-serif lg:text-[2vw] lg:leading-snug text-[2vw] lg:block hidden xl:block leading-tight xl:px-8">
              Founded in 2015,we'he concentrated on crafting <br /> unparalleled
              expriences for brands through <br /> strategy,design, content,and
              development. <br /> Cluminating in a synthesis of work that's as
              bold as <br /> it is Unmistakably Orignal.{" "}
            </h1>
          </div>
          <div className="xl:w-1/2 lg:w-1/2  xl:h-full xl:pr-8 xl:flex flex-col items-end">
            <div>
              <h1 className="xl:text-[3vw] sm:text-[5vw] lg:text-[4vw] text-[8vw] text-end leading-tight xl:none capitalize">
                We have our <br className="xl:hidden" /> partners solve
              </h1>
              <h1 className="xl:text-[3vw] sm:text-[5vw] lg:text-[4vw] text-[8vw] text-end leading-tight  xl:leading-none">
                {" "}
                for Today While
                Building{" "}
              </h1>
              <h1 className="xl:text-[3vw] sm:text-[5vw] lg:text-[4vw] text-[8vw] text-end leading-tight xl:leading-none capitalize">
                towards tomorrow
              </h1>
            </div>
            <div>
              <video
                autoPlay
                muted
                src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/reels/home-mini-tint-new.webm?_a=DATAdtAAZAA0"
                className="pt-16 xl:pt-5"
              ></video>
            </div>
            <h1 className="font-serif text-[6vw] lg:hidden sm:sm:text-[4vw] sm:leading-tight  xl:hidden py-9  px-4">
              Founded in 2015,we've <br /> concentrated on crafting <br /> unparalleled
              expriences for <br /> brands through strategy,design,<br /> content,and
              development. <br />Cluminating in a synthesis of <br /> work that's as bold as
              it <br />is Unmistakably Orignal.{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
