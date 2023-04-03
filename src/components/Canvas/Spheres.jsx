import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Spheres() {
  const sphereCount = 50;
  const spheres = useRef();

  useEffect(() => {
    for (let i = 0; i < sphereCount; i++) {
      const matrix = new THREE.Matrix4();
      const scale = 0.2 + Math.random() * 0.8;
      matrix.compose(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          -22 + Math.random() * 7,
          (Math.random() - 0.5) * 35
        ),
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, scale)
      );
      spheres.current.setMatrixAt(i, matrix);
    }
  }, []);
  return (
    <spotLight position={[0, 10, 0]} color="white">
      <instancedMesh ref={spheres} args={[null, null, sphereCount]}>
        <sphereGeometry />
        <meshPhysicalMaterial
          roughness={0.7}
          thickness={0.5}
          transmission={1}
        />
      </instancedMesh>
    </spotLight>
  );
}
