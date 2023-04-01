import { useVideoTexture, Decal, useTexture } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

import * as THREE from "three";

import { duck, git } from "../../assets";

export default function ScreenShow() {
  const texture = useVideoTexture(duck);
  const decal = useTexture(git);

  const cube = useRef();

  const cubeJump = () => {
    cube.current.applyImpulse({ x: 0, y: 2, z: 0 });
    cube.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
    console.log(cube.current);
  };

  const collisionEnter = () => {
    console.log("collision!");
  };

  return (
    <>
      <Physics>
        <RigidBody type="fixed">
          <mesh position={[4, -30, -15]} rotation={[0, -0.5, 0]}>
            <planeGeometry args={[8, 5]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          </mesh>
          <mesh
            position={[2.7, -32.5, -12.7]}
            rotation={[-Math.PI * 0.5, 0, -0.5]}
          >
            <planeGeometry args={[8, 5]} />
            <meshPhysicalMaterial
              roughness={0.7}
              thickness={0.5}
              transmission={1}
            />
          </mesh>
          <mesh
            position={[0.7, -32.5, -9]}
            rotation={[-Math.PI * 0.5, 0, -0.5]}
          >
            <planeGeometry args={[8, 5]} />
            <meshPhysicalMaterial
              roughness={0.7}
              thickness={0.5}
              transmission={1}
            />
          </mesh>
          <mesh
            position={[-1.5, -32.5, -5]}
            rotation={[-Math.PI * 0.5, 0, -0.5]}
          >
            <planeGeometry args={[8, 5]} />
            <meshPhysicalMaterial
              roughness={0.7}
              thickness={0.5}
              transmission={1}
            />
          </mesh>
        </RigidBody>

        <RigidBody
          type="dynamic"
          restitution={1}
          ref={cube}
          position={[-1.75, -30, -5]}
          onCollisionEnter={collisionEnter}
        >
          {/* <OrbitControls /> */}
          <mesh onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial />
            <Decal
              debug // Makes "bounding box" of the decal visible
              position={[0, 0, 0]} // Position of the decal
              rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
              scale={1}
            >
              <meshBasicMaterial map={decal} />
            </Decal>
          </mesh>
          <mesh onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial />
            <Decal
              debug // Makes "bounding box" of the decal visible
              position={[0, 0, 0]} // Position of the decal
              rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
              scale={1}
            >
              <meshBasicMaterial map={decal} />
            </Decal>
          </mesh>
          <mesh onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial />
            <Decal
              debug // Makes "bounding box" of the decal visible
              position={[0, 0, 0]} // Position of the decal
              rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
              scale={1}
            >
              <meshBasicMaterial map={decal} />
            </Decal>
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}

// import {
//   useVideoTexture,
//   Decal,
//   useTexture,
//   OrbitControls,
// } from "@react-three/drei";
// import { Physics, RigidBody } from "@react-three/rapier";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// import * as THREE from "three";

// import { duck, git } from "../../assets";

// export default function ScreenShow() {
//   const texture = useVideoTexture(duck);
//   const decal = useTexture(git);

//   const boxRef = useRef();
//   const sphereRef = useRef();

//   const boxCount = 10;
//   const boxes = [...Array(boxCount)].map(() => ({
//     position: [0, -20 + Math.random() * 10 + 5, Math.random() * 10 - 5],
//     size: [1, 1, 1],
//     color: `hsl(${Math.random() * 360}, 100%, 50%)`,
//   }));

//   const handleSphereDrag = (event) => {
//     if (event.intersections.length > 0) {
//       const { point } = event.intersections[0];
//       if (point) {
//         const newPosition = new THREE.Vector3().copy(point);
//         sphereRef.current.setTranslation(
//           newPosition.x,
//           newPosition.y,
//           newPosition.z
//         );
//       }
//     }
//   };

//   return (
//     <>
//       {/* <OrbitControls /> */}
//       <Physics>
//         <RigidBody type="static">
//           <mesh position={[0, -30, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//             <planeGeometry args={[20, 20]} />
//             <meshBasicMaterial color="gray" />
//           </mesh>
//         </RigidBody>

//         {boxes.map((box, index) => (
//           <RigidBody
//             key={index}
//             ref={boxRef}
//             type="dynamic"
//             position={box.position}
//           >
//             <mesh>
//               <sphereGeometry args={box.size} />
//               <meshStandardMaterial color={box.color} />
//             </mesh>
//           </RigidBody>
//         ))}
//       </Physics>
//     </>
//   );
// }
