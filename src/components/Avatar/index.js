import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export const Avatar = () => (
  <Canvas
    id="homepage-avatar"
    // camera={{ position: [2, 0, 12.25], fov: 15 }}
    camera={{ position: [-5, 10, -10], fov: 15 }}
  >
    <ambientLight intensity={1.25} />
    <ambientLight intensity={0.1} />
    <directionalLight intensity={0.4} />
    <Suspense fallback={null}>
      {/* <Model position={[0.025, -0.9, 0]} /> */}
      {/* <Model position={[0.25, -1.0, 0]} /> */}
      <Model />
    </Suspense>
    <OrbitControls minPolarAngle={1.5} maxPolarAngle={1.5} enableZoom={false} />
  </Canvas>
);

export default Avatar;
