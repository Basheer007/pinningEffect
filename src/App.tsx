import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import StickyDiv from "./component/StickyDiv";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import { StickydivInterface } from "./Interfaces/StickydivInterface";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const assets: StickydivInterface[] = [
  {
    id: 1,
    image: image1,
    desc: `This image captures the breathtaking view of a coastal village during a
        serene sunset. Perched on a rugged cliff, the colorful buildings glow
        warmly with lights, creating a cozy and inviting atmosphere.`,
  },
  {
    id: 2,
    image: image2,
    desc: `This image captures the breathtaking view of a coastal village during a
        serene sunset. Perched on a rugged cliff, the colorful buildings glow
        warmly with lights, creating a cozy and inviting atmosphere.`,
  },
  {
    id: 3,
    image: image3,
    desc: `This image captures the breathtaking view of a coastal village during a
        serene sunset. Perched on a rugged cliff, the colorful buildings glow
        warmly with lights, creating a cozy and inviting atmosphere.`,
  },
];

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Cursor
  window.addEventListener("mousemove", (e) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.display = "block";
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    }
  });

  // remove cursor on mouseout
  window.addEventListener("mouseout", () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.display = "none";
    }
  });

  useGSAP(() => {
    gsap.to(componentRefs.current, {
      scrollTrigger: {
        trigger: componentRefs.current,
        start: "top 0%",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
  });
  return (
    <div className="bg-black px-2">
      <div ref={cursorRef} className="cursor"></div>
      <div className="h-screen text-white flex flex-col justify-center">
        <div>
          <h1 className="text-6xl font-semibold">Scrumptious</h1>
          <h1 className="text-6xl font-semibold">Project</h1>
          <h1 className="text-6xl font-semibold">Showcase</h1>
        </div>
        <div className="mt-24 text-right">
          <p className="text-xl capitalize text-orange-500">Scroll down</p>
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        {assets.map((asset) => {
          return (
            <StickyDiv
              {...asset}
              key={asset.id}
              ref={(el) => (componentRefs.current[asset.id] = el)}
            />
          );
        })}
      </div>
      <div className="h-screen text-white flex flex-col justify-center">
        <div>
          <h1 className="text-6xl font-semibold">Scrumptious</h1>
          <h1 className="text-6xl font-semibold">Project</h1>
          <h1 className="text-6xl font-semibold">Showcase</h1>
          <h1 className="text-6xl font-semibold">ends</h1>
        </div>
        <div className="mt-24 text-right">
          <p className="text-xl capitalize text-orange-500">Thank You</p>
        </div>
      </div>
    </div>
  );
}
