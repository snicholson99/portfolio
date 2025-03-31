import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import styles from "./AvatarWithScene.module.css";

export default function AvatarWithScene() {
  const [fov, setFov] = useState(20);

  useEffect(() => {
    const updateFov = () => {
      const width = window.innerWidth;
      // Calculate FOV based on window width (adjust the multiplier as needed)
      const newFov = Math.max(20, 100 - width / 5); // Example calculation
      setFov(newFov);
    };

    // Initial FOV calculation
    updateFov();

    // Add event listener for window resize
    window.addEventListener("resize", updateFov);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("resize", updateFov);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 1.6, 2.5], fov, near: 0.1, far: 100 }} // Camera zoomed in on upper body
      className={styles["avatar-container"]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Avatar url="/assets/avatar.glb" />
      <OrbitControls
        enableZoom={false} // Disable zooming to avoid accidental zoom
        enablePan={false} // Optionally disable panning to keep a fixed view
        enableRotate={false} // Optionally disable panning to keep a fixed view
      />
    </Canvas>
  );
}
