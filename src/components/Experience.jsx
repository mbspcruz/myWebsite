import { CanvasComponents, Overlay } from ".";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function Experience() {
  const [pages, setPages] = useState(4);

  useEffect(() => {
    function updatePages() {
      console.log(window.innerWidth);
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setPages(7);
      } else {
        setPages(4);
      }
    }
    updatePages();
    window.addEventListener("resize", updatePages);
    return () => window.removeEventListener("resize", updatePages);
  }, []);
  return (
    <>
      <ambientLight />
      <ScrollControls pages={pages}>
        <Scroll>
          <CanvasComponents />
        </Scroll>
        <Scroll html>
          <Overlay />
        </Scroll>
      </ScrollControls>
    </>
  );
}
