import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const Slide = () => {
  const [show, setShow] = useState(false);

  const audioRef = useRef(null);
  const reff = useRef(null);

  function playAudio() {
    audioRef.current.play();
  }

  function playmuted() {
    reff.current.play();
  }

  return (
    <>
      <audio src="https://toyfight.co/audio/button/fx.mp3" ref={reff}></audio>
     
      <Swiper slidesPerView={7.5} spaceBetween={3} className="mySwiper"
      
      >
        <SwiperSlide className="name"
         onMouseEnter={playAudio}
         onMouseLeave={playmuted}
        >
          <div className='w-1/2 h-1/2 bg-[url("https://images.prismic.io/toyfight/ZmCDYJm069VX1fIN_alstro-cs-img-06.jpg?auto=format%2Ccompress&fit=clip")] bg-cover bg-center '></div>
        </SwiperSlide>
        <SwiperSlide className="name-1">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/gsap/tl0l7naljhqqlgpxv7sy.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="name">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/carrot/carrot-1.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="name-1">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/cult-gaia/cg-1.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="name-2">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/sparq/sparq-1.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="name-2">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/under-armour/uu-joshua.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="name-1">
          <div className='w-1/2 h-1/2 bg-[url("https://images.prismic.io/toyfight/ZkStOCol0Zci9Kbh_senreve-9.jpg?auto=format%2Ccompress&fit=clip")] bg-cover bg-center '></div>
        </SwiperSlide>
        <SwiperSlide className="name">
          <div className="w-1/2  h-1/2">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/case-studies/marc-rose/mr-screen.webm?_a=DATAdtAAZAA0"
              className="w-[100%] h-[100%]"
            ></video>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
