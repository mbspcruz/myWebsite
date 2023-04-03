import { Overlay, Experience, CanvasLoader } from "./components";
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

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
        </div>
      ) : (
        <div className="hidden md:block bg-url('./assets/bg.svg') bg-repeat-x">
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
