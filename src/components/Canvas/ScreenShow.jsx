import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function ScreenShow() {
  return (
    <>
      <mesh position={[0, -75, 0]}>
        <planeGeometry args={[8, 5]} />
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
