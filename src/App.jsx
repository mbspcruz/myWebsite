import { Overlay, Duck } from "./components";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

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

  return <>{stateMobile ? <Overlay /> : <Duck />}</>;
}

export default App;
