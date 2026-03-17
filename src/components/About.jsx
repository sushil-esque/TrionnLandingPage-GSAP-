import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      const st = {
        trigger: "#about-heading",
        start: isMobile ? "top bottom" : "top 80%",
        end: "bottom 40%",
        scrub: 2,
      };

      const tl = gsap.timeline({ scrollTrigger: st });

      const paragraphSplit = new SplitText(".about-p", {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      // Heading splits - flat structure to avoid background-clip nesting
      const whoSplit = new SplitText(".who-wrap", { type: "lines" });
      const weAreSplit = new SplitText(".weare-wrap", { type: "lines" });

      const headingLines = [...whoSplit.lines, ...weAreSplit.lines];

      // WHO / WE ARE - Add clipping setup
      gsap.set(headingLines, {
        backgroundImage:
          "linear-gradient(90deg, var(--text-color) 50%, var(--text-color-faded) 50%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition: "100% 0",
        display: "inline-block",
      });

      if (!isMobile) {
        // WHO — slide from left and color fill
        tl.fromTo(
          whoSplit.lines,
          { x: -120, backgroundPosition: "100% 0" },
          { x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
          0,
        )
          // WE ARE — slide from right and color fill
          .fromTo(
            weAreSplit.lines,
            { x: 120, backgroundPosition: "100% 0" },
            { x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
            0,
          )
          // Paragraph reveal
          .fromTo(
            paragraphSplit.lines,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, stagger: 0.1, ease: "expo.out" },
            0,
          );
      } else {
        // Mobile reveal and fill (Restoring horizontal movement)
        const offsetX = 80;

        tl.fromTo(
          whoSplit.lines,
          { x: -offsetX, y: 30, opacity: 0, backgroundPosition: "100% 0" },
          {
            x: 0,
            y: 0,
            opacity: 1,
            backgroundPosition: "0% 0",
            stagger: 0.1,
            ease: "none",
          },
          0,
        )
          .fromTo(
            weAreSplit.lines,
            { x: offsetX, y: 30, opacity: 0, backgroundPosition: "100% 0" },
            {
              x: 0,
              y: 0,
              opacity: 1,
              backgroundPosition: "0% 0",
              stagger: 0.1,
              ease: "none",
            },
            0,
          )
          .fromTo(
            paragraphSplit.lines,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out" },
            0.3,
          );
      }

      // Secondary paragraph fade
      gsap.from("#about-p-secondary", {
        scrollTrigger: {
          trigger: "#about-p-secondary",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 2,
        },
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });
    },
    { dependencies: [isMobile] },
  );

  return (
    <div id="about" className="px-6 md:px-0">
      <div
        id="about-heading"
        className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0"
      >
        <div>
          <h1 className="font-bold flex flex-col text-6xl md:text-9xl leading-tight md:leading-[6.65rem] tracking-tight md:tracking-[-6px] transform scale-y-110 md:scale-y-120 ">
            <span className="who-wrap inline-block">WHO</span>
            <span className="weare-wrap inline-block">WE ARE</span>
          </h1>
          <div className="about-p text-xl md:text-[2.8rem] leading-snug md:leading-13 mt-8 md:mt-14 max-w-4xl">
            As an award-winning agency within the digital jungle, TRIONN
            transcends aesthetics, crafting your vision into legacy that
            endures.
          </div>
        </div>
      </div>
      <div
        id="about-p-secondary"
        className="max-w-2xl mt-10 md:mt-20 w-full ml-auto"
      >
        <p className="text-lg md:text-2xl">
          We roar with creativity, staying updated with the latest tech to make
          your brand a formidable force in the digital wilderness and deliver
          exceptional website and app experiences.
        </p>
        <button className="text-lg  md:text-xl mt-6 md:mt-10 border border-black dark:border-white px-8 py-3 md:py-4 rounded-full">
          About us
        </button>
      </div>
    </div>
  );
}

export default About;
