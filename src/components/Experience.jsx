import { CanvasComponents, Overlay } from ".";
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
          <button ref={buttonRef}>Click me!</button>
        </Scroll>
      </ScrollControls>
    </>
  );
}
