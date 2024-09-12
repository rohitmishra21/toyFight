import React from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const One = () => {
  return (
    <>
    <Loader/>
      <section className="section-1">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            staggerChildren: 1,
          }}
          className="two w-full  bg-[#FAF6EF]"
        >
          <div className="xl:block md:block hidden ">
            <h1 className="xl:text-[7vw] md:text-7xl pt-28 tracking-tight px-5 font-light">
              Where Originality
            </h1>
            <div className="flex items-center leading-none">
              <h1 className="xl:text-[7vw]  md:text-7xl tracking-tight px-5 font-light">
                Clashes
              </h1>
              <img
                src="https://toyfight.co/images/services/panda.gif"
                alt=""
                className="w-32"
              />
              <h1 className="xl:text-[7vw]  md:text-7xl tracking-tight px-5 font-light">
                With
              </h1>
              <img
                src="https://toyfight.co/images/services/mask.gif"
                alt=""
                className="w-32"
              />
            </div>
            <div className="flex   leading-none items-center">
              <img
                src="https://toyfight.co/images/services/tv.gif"
                alt=""
                className="w-40"
              />
              <h1 className="xl:text-[7vw]  md:text-7xl tracking-tight px-5 ">
                Authenticity
              </h1>
            </div>
          </div>
          <div className="xl:hidden md:hidden px-2  block">
            <h1 className="text-[17vw] leading-6 pt-28 tracking-tight font-light">
              Where
            </h1>
            <h1 className="text-[16vw] left-6  tracking-tight  font-light">
              Originality
            </h1>
            <div className="flex items-center">
              <h1 className="text-[16vw] leading-none tracking-tight font-light">
                Clashes
              </h1>
              <img
                src="https://toyfight.co/images/services/panda.gif"
                alt=""
                className="w-24"
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-[15vw] leading-3 tracking-tight  font-light">
                With
              </h1>
              <img
                src="https://toyfight.co/images/services/mask.gif"
                alt=""
                className="w-24"
              />
            </div>

            <div className="flex leading-none items-center">
              <img
                src="https://toyfight.co/images/services/tv.gif"
                alt=""
                className="w-24"
              />
              <h1 className="text-[13vw] tracking-tight">Authenticity</h1>
            </div>
          </div>
          <div className=" pt-14 xl:flex md:flex md:flex-col md:items-end  xl:flex-col xl:items-end">
            <h1 className="xl:text-[2.9vw] md:text-2xl  px-3 xl:p-0 text-2xl xl:leading-none  leading-none">
              Our ethos is anchored in the creation of experiences that <br />
              feel Unmistakably Original.
            </h1>
            <h1 className="xl:text-[2.9vw] xl:block hidden md:block md:text-2xl text-xl pb-32 pt-11 border-black  xl:leading-none  leading-none">
              We believe that true originality stems from a blend of{" "}
              <br className="" />
              services we offer that deliver creativity, authenticity, and{" "}
              <br /> a deep understanding of user's needs and aspirations.
            </h1>
            <h1 className="xl:hidden md:hidden text-2xl px-3  pb-32 pt-11 border-black  leading-none">
              We believe that true originality stems from a blend of services we
              offer that deliver creativity, authenticity, and a deep
              understanding of user's needs and aspirations.
            </h1>
          </div>
        </motion.div>
      </section>

      <section className="section-2 two px-8 bg-[#FAF6EF]">
        <div className="w-full  min-h-screen border-t border-gray-700 pt-10   ">
          <div className="w-[100%] relative xl:flex md:flex justify-between">
            <div className="bg-black rounded-md xl:w-[25%] md:w-[45%]  flex justify-center items-center h-[80vh]">
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{ duration: 1 }}
                className=" w-[70%] h-[70%] rounded-md"
              >
                <video
                  autoPlay
                  muted
                  loop
                  src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/strategy-services.webm?_a=DATAdtAAZAA0"
                  className="w-full h-full"
                ></video>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 1,
              }}
              className="xl:w-[64%] md:w-[64%] px-2 py-3"
            >
              <div className="flex pt-4 items-center gap-2">
                <h1 className="xl:text-[1.3vw] bg-[#F1EDE7] one">(01)</h1>
                <h1 className="xl:text-[3vw] px-3 bg-[#F1EDE7] py-1 one ">
                  Strategy
                </h1>
              </div>
              <div className="xl:h-[87%] md:h-[87%] w-[100%]   flex gap-2 flex-col justify-between">
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-2  pt-12">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Brand Strategy
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      say hii
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Content Stratege{" "}
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Workshops
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Positioning
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Naming
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Tone of Voice
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Brand Guides
                    </h1>
                  </div>
                </div>
                <div className=" xl:flex md:flex justify-between">
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: "100%",
                    }}
                    transition={{
                      duration: 3,
                    }}
                    className="  overflow-hidden"
                  >
                    <h1 className="leading-none px-2 text-xl py-4 xl:text-[1.2vw] xl:w-[30%] md:w-[70%] text-gray-700  ">
                      We specialise in creating branding that resonates and
                      connects. Our user experience design is focused on
                      delivering seamless interactions, while our interface
                      design marries functionality with visual appeal.
                    </h1>
                  </motion.div>

                  <div className="flex px-2 py-4 items-start xl:items-end flex-col gap-2 bottom-8">
                    <h1 className=" pb-4  xl:text-end">WORK</h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md  one text-xs xl:text-end">
                      Under Armous
                    </h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md one  text-xs xl:text-end">
                      Brave Bison
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-3 two px-8 bg-[#FAF6EF]">
        <div className="w-full  min-h-screen border-t border-gray-700 pt-10   ">
          <div className="w-[100%] relative xl:flex md:flex justify-between">
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="xl:w-[64%] md:w-[64%]"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-xl xl:text-[1.3vw] bg-[#F1EDE7] one">
                  (02)
                </h1>
                <h1 className="text-xl xl:text-[2.7vw] px-3 bg-[#F1EDE7] py-1 one ">
                  Design
                </h1>
              </div>
              <div className="xl:h-[87%] md:h-[87%] w-[100%]   flex gap-2 flex-col justify-between">
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-2  pt-12">
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Brand Strategy
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Identity Design
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Wireframing & Prototypes
                    </h1>
                  </div>
                  <div className="flex  gap-3">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">ui</h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">ux</h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Product Design
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Websites & eCommerce
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Motion
                    </h1>
                  </div>
                </div>
                <div className=" xl:flex md:flex justify-between py-4">
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: "100%",
                    }}
                    transition={{
                      duration: 3,
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className="leading-none xl:text-[1.2vw] text-xl px-2  xl:w-[30%] md:w-[70%] text-gray-700  ">
                      We specialise in creating branding that resonates and
                      connects. Our user experience design is focused on
                      delivering seamless interactions, while our interface
                      design marries functionality with visual appeal.
                    </h1>
                  </motion.div>

                  <div className="flex items-start xl:items-end px-2 py-4 xl:py-0 flex-col gap-2 bottom-8">
                    <h1 className=" pb-4 md:text-end  xl:text-end">WORK</h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md  one text-xs md:text-end xl:text-end">
                      Under Armous
                    </h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md one  text-xs md:text-end xl:text-end">
                      Brave Bison
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="bg-black rounded-md xl:w-[25%] md:w-[45%]  flex justify-center items-center h-[80vh]">
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className=" w-[70%] h-[70%] rounded-md"
              >
                <video
                  autoPlay
                  muted
                  loop
                  src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/design-new-services.webm?_a=DATAdtAAZAA0"
                  className="w-full h-full"
                ></video>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4 two px-8 bg-[#FAF6EF]">
        <div className="w-full  min-h-screen border-t border-gray-700 pt-10   ">
          <div className="w-[100%] relative md:flex xl:flex justify-between">
            <div className="bg-black rounded-md xl:w-[25%] md:w-[45%]  flex justify-center items-center h-[80vh]">
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{ duration: 1 }}
                className=" w-[70%] h-[70%] rounded-md bg-[url('https://images.prismic.io/toyfight/ZjyZekMTzAJOCpsH_cult-gaia-1-.jpg?auto=format%2Ccompress&w=450&h=auto&fit=clip')] bg-cover bg-center bg-no-repeat"
              ></motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 1,
              }}
              className="xl:w-[64%] md:w-[64%]  px-2 py-4"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-xl xl:text-[1.3vw] bg-[#F1EDE7] one">
                  (03)
                </h1>
                <h1 className="text-xl xl:text-[3vw] px-3 bg-[#F1EDE7] py-1 one ">
                  Devlopment
                </h1>
              </div>
              <div className="h-[87%] w-[100%]   flex gap-2 flex-col justify-between">
                <div className="flex gap-2 px-2 flex-col">
                  <div className="flex gap-2   pt-12">
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Technical Architecture
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Front-End Developmen
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Back-End Development
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      eCommerce Development
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs  xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      WebGL Development
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      App Development
                    </h1>
                  </div>
                </div>
                <div className=" xl:flex md:flex justify-between">
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: "100%",
                    }}
                    transition={{
                      duration: 3,
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className=" leading-none  xl:text-[1.2vw] text-xl px-2 py-4 xl:w-[30%] md:w-[70%] text-gray-700  ">
                      Our development team excels in delivering a full spectrum
                      of digital product creation services, tailored to meet
                      each client's unique needs. We specialise in designing
                      highly intuitive and responsive user interfaces,
                      prioritising both usability and aesthetic excellence.
                    </h1>
                  </motion.div>

                  <div className="flex flex-col items-start xl:items-end px-2 py-4 gap-2 bottom-8">
                    <h1 className=" pb-4  text-end">WORK</h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md  one text-xs xl:text-end">
                      Gsap
                    </h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md one  text-xs xl:text-end">
                      cult gaia
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-5 two px-8 bg-[#FAF6EF]">
        <div className="w-full px-2  min-h-screen border-t border-gray-700 pt-10   ">
          <div className="w-[100%] relative xl:flex md:flex justify-between">
          <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="xl:w-[64%] md:w-[64%]"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-xl xl:text-[1.3vw] bg-[#F1EDE7] one">
                  (04)
                </h1>
                <h1 className="text-xl xl:text-[2.7vw] px-3 bg-[#F1EDE7] py-1 one ">
                  Content
                </h1>
              </div>
              <div className="h-[87%] w-[100%]   flex gap-2 flex-col justify-between">
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-2  pt-12">
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Campaigns
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Social Media
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      Photography
                    </h1>
                    <h1 className="text-xs xl:px-3 px-1 rounded-md bg-[#F1EDE7]">
                      CGI/3D
                    </h1>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Illustration
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Animation
                    </h1>
                    <h1 className="text-xs px-3 rounded-md bg-[#F1EDE7]">
                      Copywriting
                    </h1>
                  </div>
                </div>
                <div className=" xl:flex md:flex py-4 justify-between">
                  <motion.div
                   initial={{height:0}}
                   whileInView={{height:"100%"}}
                   transition={{duration:3}}
                   className="overflow-hidden"
                  >
                  <h1 className="leading-none px-2 text-xl xl:text-[1.2vw] xl:w-[30%] md:w-[70%] text-gray-700  ">
                    We employ a blend of creativity, strategic insight, and
                    technology to ensure brands stay top of mind. Our approach
                    is holistic, considering every facet of the user experience
                    to create content that captivates, convinces, and converts,
                    setting the standard for what digital storytelling can
                    achieve.
                  </h1>
                  </motion.div>
                 
                  <div className="flex flex-col items-start py-4 xl:items-end px-2 gap-2 bottom-8">
                    <h1 className=" pb-4  text-end">WORK</h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md  one text-xs xl:text-end">
                      Under Armous
                    </h1>
                    <h1 className="bg-[#F1EDE7] px-1 rounded-md one  text-xs xl:text-end">
                      Brave Bison
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="bg-black rounded-md xl:w-[25%] md:w-[45%]  flex justify-center items-center h-[80vh]">
              <div className=" w-[70%] h-[70%] rounded-md">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/content-services.webm?_a=DATAdtAAZAA0"
                  className="w-full h-full"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-6 two px-8 bg-[#FAF6EF]">
        <div className="w-full min-h-screen border-t border-gray-700 pt-10   ">
          <div className="w-full h-full  xl:flex">
            <div className="xl:w-1/2  justify-between  flex flex-col items-start xl:pr-40">
              <div className="flex flex-col items-start gap-5  xl:gap-24">
                <h1 className="xl:text-[2.7vw] text-2xl px-3 rounded-lg bg-[#F1EDE7] py-1 one ">
                  Clients
                </h1>
                <motion.div
                initial={{height:0}}
                whileInView={{height:"100%"}}
                transition={{duration:2}}
                className="overflow-hidden"
                >
                <h1 className="text-2xl xl:text-[2.9vw] md:text-center xl:text-start leading-none">
                  We've Worked With Some of the World's Biggest Brands,
                  Challenger Brands, and Startups.
                </h1>
                </motion.div>
               
              </div>
              <div>
                <button className="px-8 xl:block hidden py-3 rounded-full  one uppercase">
                  view more
                </button>
              </div>
            </div>
            <div className="xl:w-1/2 xl:flex   py-7 ">
              <div className="xl:w-[30%] w-full ">
                <ul className="capitalize  flex flex-col gap-2 items-center   xl:items-end">
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    Adidas
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    Apple beats
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    Brave vison
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    cult gaia
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    chrome
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    done + dusted
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    dean brandshow
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    ellesse
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    ember fund
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    face book{" "}
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    first fit
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    google
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    hg
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    hotel carmel
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    instagram
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    iweigh
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    keen
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    KFc
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    LA artbok
                  </li>
                  <li className=" bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    longines
                  </li>
                </ul>
              </div>
              <div className="xl:w-[30%] py-4 text-end capitalize">
                <ul className="flex flex-col gap-2 items-center   xl:items-end">
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    NEARD skincare
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    nesta
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    omega
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    open contents
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    psg
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    royal caribbean curieses
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    salmone
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    salreve
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    switch
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    taco bell{" "}
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    the scott
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    tissot
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    twitch
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    under armour
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    vivid + co
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    vocom
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    volvic
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    wowork
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    XDC{" "}
                  </li>
                  <li className="bg-[#F1EDE7] px-2 py-1 text-xs rounded-md">
                    youtube
                  </li>
                </ul>
              </div>
              <div className="xl:w-[40%] flex justify-center xl:justify-end">
                <div className="bg-black h-[19%] w-[70%] flex justify-center items-center rounded-md">
                  <div className="w-[100%] h-[90%]">
                    <video
                      autoPlay
                      loop
                      muted
                      src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/nerd.webm?_a=DATAdtAAZAA0"
                      className="w-full h-full"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default One;
