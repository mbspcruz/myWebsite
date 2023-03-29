import { Canvas } from "@react-three/fiber";
import { useGLTF, ScrollControls, Scroll } from "@react-three/drei";

import { Perf } from "r3f-perf";
import { Overlay, Spheres, Cubes } from ".";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useRef } from "react";

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
  const ducky = useGLTF("./assets/rubberduckyblend.glb");
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
          {/* <Perf /> */}
          {/* <hemisphereLight castShadow color={"white"} groundColor={"orange"} /> */}

          <ambientLight />
          <ScrollControls pages={5}>
            <Scroll>
              <CameraMotion>
                <Model />
              </CameraMotion>
              <Spheres />
            </Scroll>
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}
