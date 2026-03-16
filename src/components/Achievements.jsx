import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const AnimatedDigit = ({ children, delay, triggerRoll }) => {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span
        className={`relative block transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          triggerRoll ? "-translate-y-full" : ""
        } group-hover:-translate-y-full`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span className="block leading-none">{children}</span>
        <span className="absolute top-full left-0 block w-full text-center leading-none">
          {children}
        </span>
      </span>
    </span>
  );
};

function Achievements() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (id) => {
    setActiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useGSAP(
    () => {
      if (!isMobile) {
        // Desktop Animations - From far edges
        const scrubTrigger = (id) => ({
          trigger: id,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        });
        gsap.from("#card1", {
          scrollTrigger: scrubTrigger("#card1"),
          x: -1500, // Even further to ensure it comes from the screen edge
          y: -100,
          rotation: -30,
          opacity: 0,
          ease: "power3.out",
        });
        gsap.from("#card2", {
          scrollTrigger: scrubTrigger("#card2"),
          x: 1500,
          y: -100,
          rotation: 30,
          opacity: 0,
          ease: "power3.out",
        });
        gsap.from("#card3", {
          scrollTrigger: scrubTrigger("#card3"),
          x: -1500,
          y: -100,
          rotation: -30,
          opacity: 0,
          ease: "power3.out",
        });
        gsap.from("#card4", {
          scrollTrigger: scrubTrigger("#card4"),
          x: 1500,
          y: -100,
          rotation: 30,
          opacity: 0,
          ease: "power3.out",
        });
      } else {
        // Mobile Animations - From edges, no zigzag position
        const mobileST = (id) => ({
          trigger: id,
          start: "top 95%",
          end: "bottom 50%",
          scrub: 1,
        });

        gsap.from("#card1", {
          scrollTrigger: mobileST("#card1"),
          x: -500,
          opacity: 0,
          ease: "power2.out",
        });
        gsap.from("#card2", {
          scrollTrigger: mobileST("#card2"),
          x: 500,
          opacity: 0,
          ease: "power2.out",
        });
        gsap.from("#card3", {
          scrollTrigger: mobileST("#card3"),
          x: -500,
          opacity: 0,
          ease: "power2.out",
        });
        gsap.from("#card4", {
          scrollTrigger: mobileST("#card4"),
          x: 500,
          opacity: 0,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [isMobile] },
  );

  const cardBaseClass =
    "group  h-[300px] md:h-[400px] w-full md:w-[48%] p-10 md:p-[66px]  rounded-3xl md:rounded-4xl transition-colors duration-500 cursor-pointer ";

  return (
    <div id="achievements" className="mt-20 px-6 md:px-0 ">
      <div className="flex flex-col gap-6 md:gap-0">
        {/* Card 1 */}
        <div
          id="card1"
          onClick={() => isMobile && toggleActive("card1")}
          className={`${cardBaseClass} bg-[#df4818]  md:bg-[#e1eaea] dark:md:bg-[#16181a]   self-start md:hover:bg-[#df4818] md:hover:text-[#e0eeee]`}
        >
          <div className="text-7xl md:text-9xl tracking-[-3px] flex">
            <AnimatedDigit delay={0} triggerRoll={activeCards.card1}>
              5
            </AnimatedDigit>
            <AnimatedDigit delay={100} triggerRoll={activeCards.card1}>
              0
            </AnimatedDigit>
            <AnimatedDigit delay={200} triggerRoll={activeCards.card1}>
              +
            </AnimatedDigit>
          </div>
          <div className="uppercase text-xl md:text-3xl tracking-tight md:tracking-[-3px] font-semibold text-right w-fit ml-auto mt-10 md:mt-19">
            awards &
            <br />
            recognition
          </div>
        </div>

        {/* Card 2 */}
        <div
          id="card2"
          onClick={() => isMobile && toggleActive("card2")}
          className={`${cardBaseClass} bg-[#4c4e51]  md:bg-[#e1eaea] dark:md:bg-[#16181a] self-start md:self-end md:-mt-[180px] md:hover:bg-[#4c4e51] md:hover:text-[#e0eeee]`}
        >
          <div className="text-7xl md:text-9xl tracking-[-3px] flex">
            <AnimatedDigit delay={0} triggerRoll={activeCards.card2}>
              9
            </AnimatedDigit>
            <AnimatedDigit delay={100} triggerRoll={activeCards.card2}>
              0
            </AnimatedDigit>
            <AnimatedDigit delay={200} triggerRoll={activeCards.card2}>
              0
            </AnimatedDigit>
            <AnimatedDigit delay={300} triggerRoll={activeCards.card2}>
              +
            </AnimatedDigit>
          </div>
          <div className="uppercase text-xl md:text-3xl tracking-tight md:tracking-[-3px] font-semibold text-right w-fit ml-auto mt-10 md:mt-19">
            projects
            <br />
            completed
          </div>
        </div>

        {/* Card 3 */}
        <div
          id="card3"
          onClick={() => isMobile && toggleActive("card3")}
          className={`${cardBaseClass} bg-[#a0c8b8] md:bg-[#e1eaea] dark:md:bg-[#16181a] self-start md:-mt-[180px] md:hover:bg-[#a0c8b8] md:hover:text-[#e0eeee]`}
        >
          <div className="text-7xl md:text-9xl tracking-[-3px] flex">
            <AnimatedDigit delay={0} triggerRoll={activeCards.card3}>
              2
            </AnimatedDigit>
            <AnimatedDigit delay={100} triggerRoll={activeCards.card3}>
              0
            </AnimatedDigit>
            <AnimatedDigit delay={200} triggerRoll={activeCards.card3}>
              +
            </AnimatedDigit>
          </div>
          <div className="uppercase text-xl md:text-3xl tracking-tight md:tracking-[-3px] font-semibold text-right w-fit ml-auto mt-10 md:mt-19">
            creative
            <br />
            minds
          </div>
        </div>

        {/* Card 4 */}
        <div
          id="card4"
          onClick={() => isMobile && toggleActive("card4")}
          className={`${cardBaseClass} bg-[#dbcc3d] md:bg-[#e1eaea] dark:md:bg-[#16181a] self-start md:self-end md:-mt-[180px] md:hover:bg-[#dbcc3d] md:hover:text-[#e0eeee]`}
        >
          <div className="text-7xl md:text-9xl tracking-[-3px] flex">
            <AnimatedDigit delay={0} triggerRoll={activeCards.card4}>
              2
            </AnimatedDigit>
            <AnimatedDigit delay={100} triggerRoll={activeCards.card4}>
              0
            </AnimatedDigit>
            <AnimatedDigit delay={200} triggerRoll={activeCards.card4}>
              +
            </AnimatedDigit>
          </div>
          <div className="uppercase text-xl md:text-3xl tracking-tight md:tracking-[-3px] font-semibold text-right w-fit ml-auto mt-10 md:mt-19">
            years of
            <br />
            experience
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
