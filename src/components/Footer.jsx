import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      // Initialize common styles for the gradient fill effect
      gsap.set(["#footerFirstSpan", "#footerSecondSpan"], {
        backgroundImage:
          "linear-gradient(90deg, var(--text-color) 50%, var(--text-color-faded) 50%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
        backgroundPosition: "100% 0",
      });

      const commonScrollTrigger = (trigger) => ({
        trigger: trigger,
        start: isMobile ? "top bottom" : "top 95%",
        end: isMobile ? "bottom 20%" : "bottom 20%",
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: commonScrollTrigger("#footerFirstSpan"),
      });
      const t2 = gsap.timeline({
        scrollTrigger: commonScrollTrigger("#footerSecondSpan"),
      });

      const offsetX = isMobile ? 100 : 300;

      tl.fromTo(
        "#footerFirstSpan",
        { x: isMobile ? -50 : 0, backgroundPosition: "100% 0" },
        { x: 0, backgroundPosition: "0% 0", ease: "power2.out" },
      );

      t2.fromTo(
        "#footerSecondSpan",
        { x: -offsetX, backgroundPosition: "100% 0" },
        { x: 0, backgroundPosition: "0% 0", ease: "power2.out" },
      );
    },
    { dependencies: [isMobile] },
  );

  return (
    <div className="my-20 md:my-40 px-6 md:px-0 overflow-hidden">
      <h3 className="text-6xl md:text-[190px] font-stretch-75% font-semibold leading-tight md:leading-36 tracking-tighter gap-0 uppercase flex flex-col items-center md:items-start text-center md:text-left">
        <span id="footerFirstSpan">time to</span>
        <span id="footerSecondSpan">roar!</span>
      </h3>
      <div className="mt-14 md:mt-20 py-8 md:py-10 border-y flex flex-col md:flex-row justify-between border-black dark:border-white gap-10 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          <div>
            <p className="text-sm uppercase opacity-60">Email</p>
            <p className="text-xl md:text-3xl">hello@email.com</p>
          </div>
          <div>
            <p className="text-sm uppercase opacity-60">call</p>
            <p className="text-xl md:text-3xl">9888888888</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase opacity-60">Teams</p>
          <p className="text-xl md:text-3xl">Talk to us</p>
        </div>
      </div>
      <p className="mt-10 md:mt-20 text-xl md:text-2xl text-center md:text-left">
        2026© TRIONN
      </p>
    </div>
  );
}

export default Footer;
