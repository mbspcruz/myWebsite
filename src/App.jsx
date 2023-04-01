import { Overlay, Experience, CanvasLoader } from "./components";
import { isMobile } from "react-device-detect";
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
  const [stateMobile, setState] = useState(isMobile);

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && window.innerWidth > 768) {
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
        </div>
      ) : (
        <div className="hidden md:block bg-url('./assets/bg.svg') bg-repeat-x">
          <div className="md:absolute h-full w-full">
            <Canvas
              dpr={[1, 2]}
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
