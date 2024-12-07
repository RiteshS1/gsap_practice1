import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
     <div ref={headingref}>
     <div className="w-full min-h-screen  font-['Helvetica_Now_Display'] ">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="relative z-[1] h-screen ">
          <nav className="p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">frontend_practice</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-2xl leading-[1.2]">
                This project is inspired from the famous website of <a href="" >Thirtysixstudios!</a>
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Cum delectus, modi atque repellendus 
                corrupti ex eaque omnis ducimus tempore ea qui.
              </p>
              <p className="text-md mt-10">scroll</p>
              
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <h1
              className="text-[12rem] font-normal tracking-tight leading-none pl-5 z-10"
            >
              Ritesh Sharma
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-32 px-10 relative z-100">
      {showCanvas &&
          data[4].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo beatae quos explicabo quaerat harum deleniti enim voluptas dicta inventore architecto porro, a labore officia, blanditiis dolorem sit culpa voluptatibus corporis? 
        </p>
       
       

        <img
          className="w-[20%] mt-10 rounded-full"
          src="../public/ME_2024.jpg"
          alt=""
        />

      </div>
     <footer className="text-slate-400 text-center">
      Made with 🤍 <a href="https://github.com/RiteshS1" target="_blank" >RS</a>
     </footer>
     </div>
    </>
  );
}

export default App;
