import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

function Works() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      // Universal Setup
      const st = {
        trigger: "#works-heading",
        start: isMobile ? "top bottom" : "top 80%",
        end: "bottom 40%",
        scrub: 2,
      };

      const tl = gsap.timeline({ scrollTrigger: st });

      // Paragraph split for reveal
      const paragraphSplit = new SplitText(".work-p", {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      // Heading splits - using only lines to avoid nesting issues with background-clip
      const recentSplit = new SplitText(".recent-wrap", { type: "lines" });
      const workSplit = new SplitText(".work-wrap", { type: "lines" });

      // Apply initial reveal styles to the split lines
      const headingLines = [...recentSplit.lines, ...workSplit.lines];

      gsap.set(headingLines, {
        backgroundImage:
          "linear-gradient(90deg, var(--text-color) 50%, var(--text-color-faded) 50%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition: "100% 0",
        display: "inline-block",
      });

      // Desktop Animations 
      if (!isMobile){
        tl.fromTo(
          recentSplit.lines,
          { x: -120, backgroundPosition: "100% 0" },
          { x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
          0,
        )
          .fromTo(
            workSplit.lines,
             { x: 122, backgroundPosition: "100% 0" },
             {x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
            0,         )
          .fromTo(
              paragraphSplit.lines,
              { yPercent: 100, opacity: 0 },
             { yPercent: 0, opacity: 1, stagger: 0.1, ease: "expo.out" },
            0,         )

        // Project Images Desktop
        const imgST = (id) => ({
          trigger: id,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        });

        gsap.from("#img1", {
          scrollTrigger: imgST("#img1"),
          x: 378,
          rotation: 10,
          ease: "power3.out",
        });
        gsap.from("#img2", {
          scrollTrigger: imgST("#img2"),
          x: -378,
          rotation: -10,
          ease: "power3.out",
        });
        gsap.from("#img3", {
          scrollTrigger: imgST("#img3"),
          x: 378,
          rotation: 10,
          ease: "power3.out",
        });

        // Info Slide Up Desktop
        const infoTrigger = (id) => ({
          trigger: id,
          start: "top 100%",
          end: "bottom 100%",
          scrub: 1,
        });
        gsap.from(".project-info1", {
          scrollTrigger: infoTrigger("#img1"),
          y: 200,
          ease: "expo.in",
        });
        gsap.from(".project-info2", {
          scrollTrigger: infoTrigger("#img2"),
          y: 200,
          ease: "expo.in",
        });
        gsap.from(".project-info3", {
          scrollTrigger: infoTrigger("#img3"),
          y: 200,
          ease: "expo.in",
        });
      } else {
        // Mobile Animations - Restoring X movement   as requested
        const offsetX = 300; // Reasonable offset for mobile to avoid extreme overflow

        tl.fromTo(
          recentSplit.lines,
          { x: -offsetX, y: 20, opacity: 0, backgroundPosition: "100% 0" },
          { 
            x: 0,
            y: 0, 
            opacity: 1, 
            backgroundPosition: "0% 0", 
            stagger: 0.1, 
            ease: "none" ,
          },
          0,
        )
          .fromTo(
           workSplit.lines,
          {   x: offsetX, y: 20, opacity: 0, backgroundPosition: "100% 0" },
           {
            x  : 0,
            y  : 0, 
            opacity: 1, 
            backgroundPosition: "0% 0", 
            stagger: 0.1, 
            ease: "none" ,
            },
            0,
          )
          .fromTo(
            paragraphSplit.lines,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out" },
            0.3,
          );

        // Mobile Images Slide/Rotation
        const mobileST = (id) => ({
          trigger: id,
          start: "top 95%",
          end: "bottom 20%",
          scrub: 1,
        });

        gsap.from("#img1", {
          scrollTrigger: mobileST("#img1"),
          x: offsetX,
          rotation: 5,
          ease: "power3.out",
        });
        gsap.from("#img2", {
          scrollTrigger: mobileST("#img2"),
          x: -offsetX,
          rotation: -5,
          ease: "power3.out",
        });
        gsap.from("#img3", {
          scrollTrigger: mobileST("#img3"),
          x: offsetX,
          rotation: 5,
          ease: "power3.out",
        });
      }
      ScrollTrigger.refresh();
   

    

    return () => {
      paragraphSplit.revert();
      recentSplit.revert();
      workSplit.revert();
    };
  },
    { dependencies: [isMobile] }
  );

  return (
    <div id="works" className="px-6 md:px-0 ">
      <div
        id="works-heading"
        className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0"
      >
        <div>
          <h1 className="font-bold flex flex-col text-6xl md:text-9xl leading-tight md:leading-[6.65rem] tracking-tight md:tracking-[-6px] transform scale-y-110 md:scale-y-120 ">
            <span className="recent-wrap inline-block">RECENT</span>
            <span className="work-wrap inline-block">WORK</span>
          </h1>
          <p className="work-p text-xl md:text-2xl flex flex-col mt-8 md:mt-14">
            <span className="md:inline">In the creative wilderness, </span>
            <span className="md:inline">clients find our work truly </span>
            <span className="md:inline">beloved.</span>
          </p>
        </div>
        <div>
          <button className="text-lg md:text-xl border border-black dark:border-white px-8 py-3 md:py-4 rounded-full">
            Explore work
          </button>
        </div>
      </div>
      <div className="mt-20">
        <div id="projects" className="flex flex-col gap-20">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
            <div className="project-info1 w-full md:w-auto order-2 md:order-1">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[6.65rem] transform scale-y-110 md:scale-y-120">
                LOFTLOOM
              </h2>
              <p className="text-lg md:text-2xl mt-4 md:mt-0">
                UI Design, UX, Wireframe
              </p>
              <button className="hidden md:block text-lg border border-black mt-6 md:mt-10 dark:border-white px-8 py-3 md:py-4 rounded-full">
                View project
              </button>
            </div>
            <div className="w-full md:w-auto order-1 md:order-2">
              <img
                id="img1"
                src="/loftloom-main-landscape.webp"
                className="work-img w-full aspect-video object-cover rounded-[20px] md:rounded-[30px]"
                alt=""
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
            <div className="w-full md:w-auto">
              <img
                id="img2"
                src="/imusic-main-landscape.webp"
                className="work-img w-full aspect-video object-cover rounded-[20px] md:rounded-[30px]"
                alt=""
              />
            </div>
            <div className="project-info2 w-full md:w-auto">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[6.65rem] transform scale-y-110 md:scale-y-120">
                IMUSIC
              </h2>
              <p className="text-lg md:text-2xl mt-4 md:mt-0">
                Research, UX, UI Design
              </p>
              <button className="hidden md:block text-lg border border-black mt-6 md:mt-10 dark:border-white px-8 py-3 md:py-4 rounded-full">
                View project
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
            <div className="project-info3 w-full md:w-auto order-2 md:order-1">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[6.65rem] transform scale-y-110 md:scale-y-120">
                TECHNIS
              </h2>
              <p className="text-lg md:text-2xl mt-4 md:mt-0">
                UX, UI, Design, Development
              </p>
              <button className="hidden md:block text-lg border border-black mt-6 md:mt-10 dark:border-white px-8 py-3 md:py-4 rounded-full">
                View project
              </button>
            </div>
            <div className="w-full md:w-auto order-1 md:order-2">
              <img
                id="img3"
                src="/technis-main-landscape.webp"
                className="work-img w-full aspect-video object-cover rounded-[20px] md:rounded-[30px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

