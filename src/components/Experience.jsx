import { CanvasComponents, Overlay } from ".";
import { cv } from "../assets";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [pages, setPages] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    function updatePages() {
      window.setTimeout(() => {
        const buttonPosition = buttonRef.current?.getBoundingClientRect().top;
        if (buttonPosition) {
          setPages(Math.ceil(buttonPosition / window.innerHeight));
        }
        console.log(buttonRef.current?.getBoundingClientRect());
      }, 100);
    }
    updatePages();
    window.addEventListener("resize", updatePages);
    window.addEventListener("load", updatePages);
    document.addEventListener("DOMContentLoaded", updatePages);
    return () => {
      window.removeEventListener("resize", updatePages);
      window.removeEventListener("load", updatePages);
      document.removeEventListener("DOMContentLoaded", updatePages);
    };
  }, []);
  return (
    <>
      <ScrollControls pages={pages}>
        <Scroll>
          <CanvasComponents />
        </Scroll>
        <Scroll html>
          <Overlay />
          <div
            ref={buttonRef}
            className="flex justify-center items-center mx-auto my-20 md:mt-40"
          >
            <a
              href={cv}
              target="_blank"
              className="rounded-md text-center p-4 lg:p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] w-1/3"
            >
              Download CV
            </a>
            <a
              href="https://calendly.com/mbspcruz/30min"
              target="_blank"
              className="flex items-center justify-center w-1/3 text-center self-stretch rounded-md ml-4  p-4 lg:p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}
