import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Sky } from "@react-three/drei";

import { Physics, RigidBody } from "@react-three/rapier";

function Model(props) {
  const ducky = useGLTF("./assets/ducky.glb");
  return (
    <group {...props} dispose={null}>
      {/* <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      > */}
      <primitive
        object={ducky.scene}
        scale={0.15}
        position={[-3, 2, 0]}
        castShadow
      ></primitive>
      {/* </PresentationControls> */}
    </group>
  );
}

export default function Duck() {
  return (
    <div className="fixed h-full w-full">
      <Canvas
        camera={{
          fov: 75,
          near: 0.2,
          far: 1000,
          position: [-8, 9, -10],
          zoom: 3,
        }}
      >
        <hemisphereLight castShadow color={"white"} groundColor={"orange"} />
        <ambientLight intensity={0.2} />
        <Model />
      </Canvas>
    </div>
  );
}
