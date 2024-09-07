import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FAF7EE] ">
        <nav className="w-full flex h-20 justify-between items-center px-8">
          <div>
            <h1 className="bg-[#212826] text-gray-200 px-4  py-3 text-xs rounded-md">
              T:
            </h1>
          </div>
          <div className="font flex justify-center gap-2 items-center">
            <h1 className=" px-6 text-xs border-b  py-3 uppercase  rounded-full bg-[#F1EDE7]">
              services
            </h1>
            <h1 className=" px-6 text-xs border-b  py-3 uppercase bg-[#F1EDE7]">
              work
            </h1>
            <h1 className="px-6 text-xs border-b  py-3  rounded-full uppercase bg-[#F1EDE7]">
              connect
            </h1>
            <h1 className=" px-6 text-xs border-b  py-3  uppercase bg-[#F1EDE7]">
              store
            </h1>
          </div>
          <div>
            <h1>Press/for?</h1>
          </div>
        </nav>
        <div className="flex justify-center mt-5">
          <video
            src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/spline-fallbacks/game.webm?_a=DATAdtAAZAA0"
            // width={320}
            // height={320}
            className="w-80"
          ></video>
        </div>

        <div
          className="flex justify-center absolute w-full h-fit top-[79%] left-1/2 -translate-y-1/2 -translate-x-1/2   gap-2 flex-col py-1 "
        >
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
          <div className="flex  w-full justify-between  px-5 ">
            <h1 className="">creating experiences Since 2015</h1>
            <div className="flex gap-2 items-center">
              <h1 className="px-3  bg-yellow-400 text-xs ">say hii</h1>
              <h1 className="text-xs">hellow@toyfight.co</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
