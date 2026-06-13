import { useEffect, useRef } from "react";

const PORTRAIT_URL = "/es.jpg";

const keywords = [
  { text: "猫奴",               color: "#695d3e", size: "text-display-lg",  opacity: "opacity-80", rotate: "-rotate-[5deg]"  },
  { text: "大湾区居民",         color: "#8b5a2b", size: "text-headline-lg", opacity: "opacity-60", rotate: "rotate-[12deg]"  },
  { text: "zumba 狂热份子",     color: "#735b28", size: "text-headline-md", opacity: "opacity-70", rotate: "-rotate-[8deg]"  },
  { text: "寻求下一段职业突破", color: "#2F1B0C", size: "text-display-lg",  opacity: "opacity-90", rotate: "rotate-[3deg]"   },
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLElement>(".keyword-item");
    if (!items) return;

    items.forEach((item) => {
      const transform = window.getComputedStyle(item).transform;
      if (transform !== "none") {
        const vals = transform.split("(")[1].split(")")[0].split(",");
        const angle = Math.round(Math.atan2(+vals[1], +vals[0]) * (180 / Math.PI));
        item.dataset.rot = String(angle);
      } else {
        item.dataset.rot = "0";
      }
    });

    const onMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      items.forEach((item, i) => {
        const depth = (i + 1) * 0.2;
        const rot = item.dataset.rot ?? "0";
        item.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${rot}deg)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="flex-1 flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left — Portrait */}
      <div className="w-full md:w-1/2 h-[614px] md:h-auto relative overflow-hidden flex items-center justify-center">
        <img
          src={PORTRAIT_URL}
          alt="Portrait of Edith"
          className="w-[30%] aspect-square object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
      </div>

      {/* Right — Keywords canvas */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-margin-desktop bg-background">
        {/* ESTJ Watermark */}
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
          <span className="watermark-estj select-none">ESTJ</span>
        </div>

        {/* Scattered Keywords */}
        <div
          ref={containerRef}
          className="relative z-10 w-full h-full flex flex-wrap content-center justify-center gap-8 md:gap-12 py-16"
        >
          {keywords.map(({ text, color, size, opacity, rotate }) => (
            <div
              key={text}
              className={`cursor-target keyword-item font-heading ${size} ${opacity} ${rotate}`}
              style={{ color }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Top decorative line */}
        <div className="absolute top-12 left-12 w-24 h-px bg-border-subtle" />

        {/* Bottom-right label */}
        <div className="absolute bottom-12 right-12 font-body text-label-sm text-on-tertiary-fixed-variant opacity-30 uppercase tracking-widest">
          Curiosity &amp; Structure
        </div>
      </div>
    </main>
  );
};

export default Home;
