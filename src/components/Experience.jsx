import { CanvasComponents, Overlay } from ".";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Perf } from "r3f-perf";

export default function Experience() {
  const [pages, setPages] = useState(4);

  useEffect(() => {
    function updatePages() {
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
      <Perf />
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
