import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function CameraMotion({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 30, state.pointer.x / 30, 0],
      0.25,
      delta
    );
  }, []);
  return <group ref={group}>{children}</group>;
}
function Model() {
  const ducky = useGLTF("./assets/duck.glb");
  return (
    <primitive
      object={ducky.scene}
      scale={0.15}
      position={[2, -0.2, -8]}
      rotation={[0.6, Math.PI * 0.8, 0]}
      castShadow
    ></primitive>
  );
}

export default function Duck() {
  return (
    <CameraMotion>
      <Model />
    </CameraMotion>
  );
}
