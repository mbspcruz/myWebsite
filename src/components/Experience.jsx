import { CanvasComponents, Overlay } from ".";
import { ScrollControls, Scroll } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <ambientLight />
      <ScrollControls pages={5}>
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
