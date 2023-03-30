import { Overlay, Experience } from "./components";

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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {stateMobile ? (
        <Overlay />
      ) : (
        <div className="hidden md:block ">
          <div className="md:fixed h-full w-full">
            <Canvas
              dpr={[1, 2]}
              camera={{
                fov: 75,
                near: 0.2,
                far: 1000,
                position: [-8, 9, -10],
                zoom: 3,
              }}
            >
              <Suspense>
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
