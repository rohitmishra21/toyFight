import React from "react";
import  Slide  from "./Slide";
import Loader from "../Loader/Loader";

const Work = () => {
  return (
    <>
      <section className="section-1  bg-[#FAF6EF]  w-full min-h-screen">
        <Loader/>
        <div className=" pt-24 xl:flex xl:px-12 justify-between px-3 py-5  w-full h-1/2">
          <div className="w-1/2 xl:flex hidden flex-col items-start gap-4">
            <h1 className="text-[2.3vw] rounded-xl px-3 bg-[#F1EDE7] py-1 one  ">
              Featured
            </h1>
            <h1 className="text-[2.3vw] xl:px-3 rounded-xl bg-[#F1EDE7]  xl:py-1 one ">Project</h1>
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
        <div className="xl:hidden min-h-screen md:grid-cols-4 md:grid-rows-2  w-full gap-2 px-2 py-4 grid grid-cols-2 grid-rows-4 "> 
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/ZmCFDJm069VX1fJg_alstro-cs-img-11.png?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/65e1dfbc27237c2bb829b9b0_GSAP6.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/65df3fb99c42d04f7d969119_Img6.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/65bba9c8615e73009ec43214_CultGaia-8.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/65bb78d5615e73009ec42ef0_SPARQ-4.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/Zj05ckMTzAJOCq5I_uu-centre.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/ZkSszyol0Zci9Kam_senreve-4.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="w-[70%] h-[70%]  bg-[url('https://images.prismic.io/toyfight/ZkXaTSol0Zci9Mkn_mr-2.jpg?auto=format%2Ccompress&fit=clip')] bg-cover bg-center"></div>
          </div>
         
        </div>



       <div className="w-full h-screen xl:block  hidden">
       <Slide/>
       </div>
      </section>
    </>
  );
};

export default Work;
