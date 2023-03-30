import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function CameraMotion({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 15, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}
function Model(props) {
  const ducky = useGLTF("./assets/rubber.glb");
  return (
    <group {...props} dispose={null}>
      <primitive
        object={ducky.scene}
        scale={0.15}
        position={[-3, 1, 0]}
        castShadow
      ></primitive>
    </group>
  );
}

export default function Duck() {
  return (
    <CameraMotion>
      <Model />
    </CameraMotion>
  );
}
