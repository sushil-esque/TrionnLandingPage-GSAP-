import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Dribble() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      if (!isMobile) {
        // Desktop Animations (User's perfected values)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#dribble-section",
            start: "top 40%",
            end: "top -30%",
            scrub: 1,
          },
        });
        tl.to(
          ".dribble-left1",
          { xPercent: -70, yPercent: 50, rotation: -40, ease: "power1.inOut" },
          0,
        ).to(
          ".dribble-right1",
          { xPercent: 70, yPercent: 50, rotation: 40, ease: "power1.inOut" },
          0,
        );

        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#dribble-section",
            start: "top 40%",
            end: "top -30%",
            scrub: 1,
          },
        });
        t2.to(
          ".dribble-left2",
          { xPercent: -70, yPercent: -40, rotation: -25, ease: "power1.inOut" },
          0,
        ).to(
          ".dribble-right2",
          { xPercent: 70, yPercent: -40, rotation: 25, ease: "power1.inOut" },
          0,
        );

        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: "#dribble-section",
            start: "top 80%",
            end: "top -40%",
            scrub: 1,
          },
        });
        t3.to(
          ".dribble-left3",
          {
            xPercent: -28,
            yPercent: -100,
            rotation: -25,
            ease: "power1.inOut",
          },
          0,
        ).to(
          ".dribble-right3",
          { xPercent: 28, yPercent: -100, rotation: 25, ease: "power1.inOut" },
          0,
        );

        tl.fromTo(
          ".dribble-center",
          { y: 900, opacity: 0 },
          { y: -300, opacity: 1, ease: "power2.out" },
          0,
        );
      } else {
        // Mobile Animations (User's perfected values)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#dribble-section",
            start: "top 20%",
            end: "bottom top",
            scrub: 1,
          },
        });

        tl.to(".dribble-left1", { xPercent: -40, ease: "power1.inOut" }, 0)
          .to(".dribble-right1", { xPercent: 40, ease: "power1.inOut" }, 0)
          .to(".dribble-left2", { xPercent: -30, ease: "power1.inOut" }, 0.2)
          .to(".dribble-right2", { xPercent: 30, ease: "power1.inOut" }, 0.2)
          .to(".dribble-left3", { xPercent: -20, ease: "power1.inOut" }, 0.4)
          .to(".dribble-right3", { xPercent: 20, ease: "power1.inOut" }, 0.4);

        gsap.fromTo(
          ".dribble-center",
          { y: 100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: "#dribble-section",
              start: "top 40%",
              end: "top 10%",
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [isMobile] },
  );

  return (
    <div
      id="dribble-section"
      className="mt-20 z-10 relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="grid grid-cols-2 gap-6 md:gap-14 w-full px-4 md:px-0">
        <img
          src="/dribbble1.webp"
          className="dribble-left1 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
        <img
          src="/dribbble2.webp"
          className="dribble-right1 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
        <img
          src="/dribbble3.webp"
          className="dribble-left2 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
        <img
          src="/dribbble4.webp"
          className="dribble-right2 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
        <img
          src="/dribbble5.webp"
          className="dribble-left3 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
        <img
          src="/dribbble6.webp"
          className="dribble-right3 rounded-xl md:rounded-2xl w-full"
          alt=""
        />
      </div>
      <div className="dribble-center -z-10 flex items-center justify-center flex-col absolute px-6">
        <img
          src="/dribbble.1a51ca99.webp"
          className="w-[120px] md:w-[200px]"
          alt=""
        />
        <p className="text-center text-xl md:text-3xl mt-6 md:mt-10">
          Like a lion's roar echoing through
          <br className="hidden md:block" />
          the jungle, a hint of our creative <br className="hidden md:block" />
          minds emerges.
        </p>
        <button className="text-lg md:text-xl mt-6 md:mt-10 border border-black dark:border-white px-8 py-3 md:py-4 rounded-full">
          View Dribble
        </button>
      </div>
    </div>
  );
}

export default Dribble;
