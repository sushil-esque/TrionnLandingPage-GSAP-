import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, Draggable } from "gsap/all";
import { useMediaQuery } from "react-responsive";

function Clients() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      const st = {
        trigger: "#partner-love",
        start: isMobile ? "top bottom" : "top 80%",
        end: "bottom 40%",
        scrub: 1,
      };

      const tl = gsap.timeline({ scrollTrigger: st });

      // Flat structure for background-clip compatibility
      const partnerSplit = new SplitText(".partner-text", { type: "lines" });
      const loveSplit = new SplitText(".love-text", { type: "lines" });

      const headingLines = [...partnerSplit.lines, ...loveSplit.lines];

      // Make the containers clip the background
      gsap.set(headingLines, {
        backgroundImage:
          "linear-gradient(90deg, var(--text-color) 50%, var(--text-color-faded) 50%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
        backgroundPosition: "100% 0",
      });

      if (!isMobile) {
        // PARTNER - Slide in from right and color fill
        tl.fromTo(
          partnerSplit.lines,
          { x: 120, backgroundPosition: "100% 0" },
          { x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
          0,
        )
          // LOVE - Slide in from left and color fill
          .fromTo(
            loveSplit.lines,
            { x: -120, backgroundPosition: "100% 0" },
            { x: 0, backgroundPosition: "0% 0", ease: "power3.out" },
            0,
          );
      } else {
        // Mobile reveal and fill (Restoring horizontal movement)
        const offsetX = 80;

        tl.fromTo(
          partnerSplit.lines,
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
        ).fromTo(
          loveSplit.lines,
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
        );
      }

      // Fade in text naturally
      tl.fromTo(
        "#partner-love-right p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: "power3.out" },
        0.3,
      );

      // Infinite Draggable Carousel logic
      const items = gsap.utils.toArray(".carousel-item");
      if (items.length > 0) {
        const itemWidth = items[0].offsetWidth + 16; // width + gap
        const totalWidth = itemWidth * 3; // Original items count (3)

        Draggable.create(".carousel-track", {
          type: "x",
          inertia: true,
          onDrag: function () {
            gsap.set(this.target, {
              x: gsap.utils.wrap(-totalWidth, 0, this.x),
            });
          },
          onThrowUpdate: function () {
            gsap.set(this.target, {
              x: gsap.utils.wrap(-totalWidth, 0, this.x),
            });
          },
        });
      }
    },
    { dependencies: [isMobile] },
  );

  const clients = [
    {
      name: "Malte Kramer",
      role: "Founder and CEO of Luxury Presence",
      img: "/malte-kramer.webp",
    },
    {
      name: "Doug Petrie",
      role: "Founder and CEO of Fast Resume",
      img: "/doug-petrie.webp",
    },
    {
      name: "Zoltan Csonka",
      role: "Founder and CEO of Ventigence",
      img: "/zoltan-csonka.webp",
    },
  ];

  // Triple items for infinite feel
  const allClients = [...clients, ...clients, ...clients];

  return (
    <div className="px-6 md:px-0 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-20 gap-10">
        <h3
          id="partner-love"
          className="text-6xl md:text-[135px] font-semibold leading-tight md:leading-[100px] tracking-tight md:tracking-[-8px] scale-y-110 md:scale-y-120 origin-bottom"
        >
          <div className="overflow-hidden">
            <p className="partner-text inline-block">PARTNER</p>
          </div>
          <div className="overflow-hidden">
            <p className="love-text inline-block">LOVE</p>
          </div>
        </h3>
        <div id="partner-love-right" className="text-xl md:text-3xl max-w-md">
          <p>Take head, as the</p>
          <p>lion's roar in our client</p>
          <p>reviews resounds</p>
        </div>
      </div>
      <div
        id="carousel-container"
        className="mt-14 md:mt-20 py-2 overflow-hidden w-full cursor-grab active:cursor-grabbing"
      >
        <div className="carousel-track flex gap-4 w-max">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="group carousel-item h-[400px] md:h-[600px] w-[300px] md:w-[600px] flex items-center justify-center hover:bg-[#e1eaea] dark:hover:bg-[#16181a] border border-black dark:border-white hover:border-none rounded-[30px] transition-colors duration-300"
            >
              <div className="flex flex-col items-center px-4 text-center">
                <div className="overflow-hidden rounded-full h-32 w-32 md:h-[190px] md:w-[190px]">
                  <img
                    src={client.img}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110"
                    alt={client.name}
                  />
                </div>
                <p className="text-xl md:text-3xl mt-6 md:mt-8">
                  {client.name}
                </p>
                <p className="text-sm md:text-lg mt-1 md:mt-2 opacity-70">
                  {client.role}
                </p>
                <button className="text-sm md:text-lg mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#eb0000] text-white hover:bg-[#c00000] transition-colors">
                  Watch now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
