import React from "react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const audioRef = useRef(null);
  const reff = useRef(null);

  function playAudio() {
    audioRef.current.play();
  }

  function playmuted() {
    reff.current.play();
  }

  function toyfight() {
    setShow((p) => !p);
  }
  function leave() {
    setShow((per) => !per);
  }
  
 function view() {
   setMenu((pe) => !pe)
   console.log(menu);
   
 }

  return (
    <>
      <audio src="https://toyfight.co/audio/button/fx.mp3" ref={reff}></audio>
      <audio
        ref={audioRef}
        src="https://toyfight.co/audio/header/fx.mp3"
      ></audio>
      <nav className="z-50 w-full fixed one md:flex   xl:flex lg:flex hidden h-20 justify-between items-center px-8">
        <div
          className="cursor-pointer"
          onMouseEnter={toyfight}
          onMouseLeave={leave}
          onMouseMove={playAudio}
        >
          <h1
            className="bg-[#212826] text-gray-200 px-4  py-3 text-xs rounded-md"
            style={{
              display: show ? "none" : "block",
            }}
          >
            T: <span className="cursor">\</span>
          </h1>

          <h1
            className="bg-[#212826] text-gray-200 px-4  py-3 text-xs rounded-md"
            style={{
              display: show ? "block" : "none",
            }}
          >
            TOYFIGHT
          </h1>
        </div>
        <div className="font flex  justify-center gap-2 items-center">
          <NavLink
            to="/service"
            className={({ isActive }) =>
              ` px-6 text-xs border-b cursor-pointer group h-10 overflow-y-hidden  py-3 uppercase  rounded-full 
          ${isActive ? "text-white" : "text-black"}
          ${isActive ? "bg-black" : "bg-[#F1EDE7]"} `
            }
          >
            <div className="" onMouseEnter={playmuted}>
              <div className=" overflow-hidden h-4 ">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  services
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  services
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              ` px-6 text-xs border-b cursor-pointer group h-10 overflow-y-hidden  py-3 uppercase  ${
                isActive ? "text-white" : "text-black"
              }  ${isActive ? "bg-black" : "bg-[#F1EDE7]"} `
            }
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  work
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  work
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              `px-6 text-xs border-b cursor-pointer group h-10 overflow-y-hidden  py-3 uppercase  ${
                isActive ? "text-white" : "text-black"
              }  rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
          >
            <div className=" " onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  connect
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  connect
                </h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/store"
            className={({ isActive }) =>
              `px-6 text-xs border-b cursor-pointer group h-10 overflow-y-hidden  py-3 uppercase  ${
                isActive ? "text-white" : "text-black"
              }  rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  store
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  store
                </h1>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <h1>Press/for?</h1>
        </div>
      </nav>



      <nav className="xl:hidden md:hidden  lg:hidden">
      <div className="flex py-4 items-center  justify-between px-4"
        style={{
          backgroundColor:menu ? "#E9E3F3" :"#FAF6EF"

        }}
      >
            <h1 className="px-3 py-2  lg:hidden bg-black text-yellow-50  font-sans xl:hidden uppercase">
              toyfight
            </h1>
            <h1 className="px-3 rounded-md py-2 lg:hidden bg-black text-yellow-50  font-sans xl:hidden uppercase" onClick={view}> menu</h1>
          </div>
        <div className="bg-[#E9E3F3] w-full gap-4 h-screen flex flex-col items-center justify-center fixed z-[9999]"
        style={{
          display:menu ? "flex" :"none"

        }}
        >
           <NavLink
            to="/service"
            className={({ isActive }) =>
              `px-10 py-4 tracking-wide cursor-pointer group one uppercase  ${
                isActive ? "text-white" : "text-black"
              } rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
            onClick={view}
            style={{
              display:menu ? "flex" :"none"
            }}
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  Service
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  Service
                </h1>
              </div>
            </div>
        </NavLink>
        <NavLink
            to="/work"
            className={({ isActive }) =>
              `px-10 py-4 tracking-wide cursor-pointer group one    uppercase  ${
                isActive ? "text-white" : "text-black"
              }  rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
            onClick={view}
            style={{
              display:menu ? "flex" :"none"
            }}
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  Work
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  Work
                </h1>
              </div>
            </div>
        </NavLink>
        <NavLink
            to="/connect"
            className={({ isActive }) =>
              `px-10 py-4 tracking-wide cursor-pointer group one    uppercase  ${
                isActive ? "text-white" : "text-black"
              }  rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
            onClick={view}
            style={{
              display:menu ? "flex" :"none"
            }}
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  Connect
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  Connect
                </h1>
              </div>
            </div>
        </NavLink>
         
        <NavLink
            to="/store"
            className={({ isActive }) =>
              `px-10 py-4 tracking-wide cursor-pointer group one    uppercase  ${
                isActive ? "text-white" : "text-black"
              }  rounded-full ${isActive ? "bg-black" : "bg-[#F1EDE7]"}  `
            }
            onClick={view}
            style={{
              display:menu ? "flex" :"none"
            }}
          >
            <div onMouseEnter={playmuted}>
              <div className="overflow-hidden h-4">
                <h1 className="group-hover:-translate-y-[100%] transition-all">
                  store
                </h1>
                <h1 className=" translate-y-[100%] group-hover:-translate-y-[100%] transition-all">
                  store
                </h1>
              </div>
            </div>
        </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
