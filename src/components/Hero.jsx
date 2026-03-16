import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      // Common animations
      const timeline = gsap.timeline();
      timeline
        .from("h1", {
          y: isMobile ? 50 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          "p",
          {
            y: isMobile ? 50 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(".buttons button", {
          y: isMobile ? 50 : 100,
          opacity: 0,
          duration: 1,
          stagger: isMobile ? 0.2 : 0,
          ease: "power3.out",
        });

      if (!isMobile) {
        // Desktop only video animation
        const videoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "video",
            start: "top 60%",
            end: "bottom 10%",
            scrub: 1,
          },
        });

        videoTimeline.fromTo(
          "video",
          {
            scale: 1,
            y: "0%",
            borderRadius: "9999px",
          },
          {
            scale: 7,
            y: "400%",
            borderRadius: "6px",
            ease: "power3.out",
          },
        );
      }
    },
    { dependencies: [isMobile] },
  );

  return (
    <div className="mx-auto  relative w-full flex flex-col items-center  md:mt-50 sm:px-6">
      <div className="h-screen relative sm:h-auto">
        <div className=" mt-[35vh]  h-[50%] sm:h-auto sm:mt-0">
          <h1 className="flex  flex-col items-center font-bold text-4xl md:text-[85px] md:leading-[4.65rem] tracking-tight md:tracking-[-3px] transform scale-y-110 md:scale-y-120 text-center">
            <span className="text-black dark:text-white">ROAR IN THE</span>
            <span>DIGITAL WILDERNESS</span>
          </h1>
          <p className="flex flex-col items-center mt-6 md:mt-10 uppercase text-center text-xs md:text-sm max-w-xs md:max-w-none">
            <span>We roar with success, delivering the TRIONN</span>
            <span className="hidden md:inline">
              through versatile design, branding and the latest
            </span>
            <span className="md:hidden">through design, branding & tech.</span>
            <span className="hidden md:inline">
              tech development to companies.
            </span>
            <img
              src="/move-down-dark.e55c1fb4.svg"
              alt=""
              className="mt-5 size-[20px] md:size-[25px]"
            />
          </p>
        </div>

        <div className=" hidden sm:flex items-center justify-center w-full mt-6 md:mt-10">
          <video
            src="/intro-video.mp4"
            autoPlay
            loop
            muted
            className="w-[120px] md:w-[181px] rounded-full pointer-events-none"
          ></video>
        </div>
        <div className="buttons flex md:absolute sm:top-[75%] justify-between gap-9  relative  w-full sm:gap-4 mt-0 sm:px-6 md:px-0">
          <button className="text-xs  sm:text-lg md:text-xl border border-black dark:border-white px-8 py-3 md:py-4 rounded-full ">
            Explore work
          </button>
          <button className="text-xs sm:text-lg md:text-xl border border-black dark:border-white px-8 py-3 md:py-4 rounded-full ">
            Get in touch
          </button>
        </div>
      </div>
      <div className="flex sm:hidden p-2 items-center justify-center w-full -mt-10 ">
        <video
          src="/intro-video.mp4"
          autoPlay
          loop
          muted
          className="w-full rounded-2xl pointer-events-none"
        ></video>
      </div>
    </div>
  );
}

export default Hero;
