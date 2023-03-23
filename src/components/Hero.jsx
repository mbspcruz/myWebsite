import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const duck = useLoader(GLTFLoader, "./assets/duck.glb");

export default function Hero() {
  const duck = useGLTF("./assets/rubberduckyblend.glb");
  console.log(duck);
  // const ducky = useLoader(GLTFLoader, "../assets/duck.glb");
  // console.log(ducky);

  return (
    <div className="m-20">
      <h1 className="text-black">
        Hello, I'm <br />
        <span className="font-bold text-4xl">Mariana Cruz</span> <br />
        <span className="font-bold">Creative Frontend Developer</span>
      </h1>
      <div className="absolute h-screen w-screen">
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <ambientLight />
          <OrbitControls />
          <primitive object={duck.scene} scale={0.35} />
        </Canvas>
      </div>
    </div>
  );
}
