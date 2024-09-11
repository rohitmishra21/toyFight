import React from "react";
import  Slide  from "./Slide";

const Work = () => {
  return (
    <>
      <section className="section-1  bg-[#FAF6EF]  w-full h-screen">
        <div className=" pt-24 flex px-12 justify-between  w-full h-1/2">
          <div className="w-1/2 flex flex-col items-start gap-4">
            <h1 className="text-[2.3vw] rounded-xl px-3 bg-[#F1EDE7] py-1 one  ">
              Featured
            </h1>
            <h1 className="text-[2.3vw] px-3 rounded-xl bg-[#F1EDE7] py-1 one ">Project</h1>
          </div>
          <div className="two  ">
            <ul className="flex flex-col gap-2 items-start">
            <li className="">FILTER</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">all</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">branding</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">marketing</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">website</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">content</li>
            <li className="bg-[#F1EDE7] px-2 py-1 capitalize text-xs rounded-md">eCommerce</li>
            </ul>
          </div>
        </div>
       
      <Slide/>
      </section>
    </>
  );
};

export default Work;
