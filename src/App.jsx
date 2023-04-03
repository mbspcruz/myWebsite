import { Overlay, Experience, CanvasLoader } from "./components";
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { cv } from "./assets";

function App() {
  const [stateMobile, setState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setState(false);
      } else {
        setState(true);
      }
    };
    // add event listener to window
    window.addEventListener("resize", handleResize);
    // call handleResize on mount
    handleResize();
    // clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {stateMobile ? (
        <div>
          <Overlay />
          <div className="my-20 m-10 flex flex-col md:flex-row md:justify-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href={cv}
              target="_blank"
              className="rounded-md text-center p-4 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E]"
            >
              Download CV
            </a>
            <a
              href="https://calendly.com/mbspcruz/30min"
              target="_blank"
              className="text-center rounded-md p-4 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </div>
      ) : (
        <div className="hidden md:block">
          <div className="md:absolute h-full w-full">
            <Canvas
              style={{ width: "100%", height: "100%" }}
              dpr={[1, 2]}
              resize={false}
              camera={{
                fov: 75,
                near: 0.2,
                far: 1000,
                zoom: 3,
              }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <Experience />
              </Suspense>
            </Canvas>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
