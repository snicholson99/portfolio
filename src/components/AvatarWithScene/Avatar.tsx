import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Avatar({ url = "/assets/avatar.glb" }) {
  const { scene } = useGLTF(url);
  const headRef = useRef<THREE.Bone | null>(null);
  const leftEyeRef = useRef<THREE.Bone | null>(null);
  const rightEyeRef = useRef<THREE.Bone | null>(null);
  const leftEyelidRef = useRef<THREE.Bone | null>(null);
  const rightEyelidRef = useRef<THREE.Bone | null>(null);
  const headMeshes = useRef<THREE.Mesh[]>([]); // Store the real head mesh objects
  const { camera, mouse } = useThree();

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    headMeshes.current = []; // Reset the mesh list

    scene.traverse((obj) => {
      if ((obj as THREE.Bone).isBone) {
        if (obj.name === "Head") {
          headRef.current = obj as THREE.Bone;
        } else if (obj.name.toLowerCase().includes("lefteye")) {
          leftEyeRef.current = obj as THREE.Bone;
        } else if (obj.name.toLowerCase().includes("righteye")) {
          rightEyeRef.current = obj as THREE.Bone;
        } else if (obj.name.toLowerCase().includes("lefteyelid")) {
          leftEyelidRef.current = obj as THREE.Bone;
        } else if (obj.name.toLowerCase().includes("righteyelid")) {
          rightEyelidRef.current = obj as THREE.Bone;
        }
      }

      // Find all visible face meshes (attached to the skinned model)
      if (
        (obj as THREE.Mesh).isMesh &&
        obj.name.toLowerCase().includes("head")
      ) {
        headMeshes.current.push(obj as THREE.Mesh);
      }
    });

    // Set camera position in front of the face
    if (headRef.current) {
      const headPos = new THREE.Vector3();
      headRef.current.getWorldPosition(headPos);
      camera.position.set(headPos.x, headPos.y, headPos.z + 1.5);
      camera.lookAt(headPos);
    }

    // Click Detection (Raycasting)
    const handleClick = (event: MouseEvent) => {
      if (!headMeshes.current.length) return;

      const raycaster = new THREE.Raycaster();
      const mousePos = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      raycaster.setFromCamera(mousePos, camera);
      const intersects = raycaster.intersectObjects(headMeshes.current, true); // Check all meshes

      if (intersects.length > 0) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150); // Short blink
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [scene, camera]);

  let blinkTimer = Math.random() * 4 + 2;
  let randomBlink = false;

  useFrame((_, delta) => {
    if (!headRef.current) return;

    const head = headRef.current;
    const headWorldPos = new THREE.Vector3();
    head.getWorldPosition(headWorldPos);

    // Cursor target
    const targetOffset = new THREE.Vector3(mouse.x * 6, mouse.y * 6, -2);
    const lookAtTarget = targetOffset.clone().unproject(camera);

    // Head movement
    const lookDirection = new THREE.Vector3()
      .subVectors(lookAtTarget, headWorldPos)
      .normalize();
    const targetQuat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      lookDirection
    );
    const parentQuat = new THREE.Quaternion();
    if (head.parent) head.parent.getWorldQuaternion(parentQuat);
    parentQuat.invert().multiply(targetQuat);
    head.quaternion.slerp(parentQuat, 0.4);

    // Eye movement
    [leftEyeRef.current, rightEyeRef.current].forEach((eye) => {
      if (!eye) return;

      const eyeWorldPos = new THREE.Vector3();
      eye.getWorldPosition(eyeWorldPos);

      const eyeLookDir = new THREE.Vector3()
        .subVectors(lookAtTarget, eyeWorldPos)
        .normalize();

      const eyeTargetQuat = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        eyeLookDir
      );

      eye.quaternion.slerp(eyeTargetQuat, 0.5);
    });

    // Blinking Logic
    if (!isBlinking) {
      blinkTimer -= delta;
      if (blinkTimer <= 0) {
        randomBlink = !randomBlink;
        blinkTimer = randomBlink ? 0.1 : Math.random() * 4 + 2;
      }
    }

    const blinkAmount = isBlinking || randomBlink ? 0 : 1;

    if (leftEyelidRef.current) leftEyelidRef.current.scale.y = blinkAmount;
    if (rightEyelidRef.current) rightEyelidRef.current.scale.y = blinkAmount;

    if (!leftEyelidRef.current && leftEyeRef.current)
      leftEyeRef.current.scale.y = blinkAmount;
    if (!rightEyelidRef.current && rightEyeRef.current)
      rightEyeRef.current.scale.y = blinkAmount;
  });

  // Adjusting the pose for a more natural standing position (arms and legs)
  useEffect(() => {
    if (headRef.current) {
      // Adjust arms to be at the side in a more natural position
      const leftArm = scene.getObjectByName("LeftArm");
      const rightArm = scene.getObjectByName("RightArm");

      if (leftArm && rightArm) {
        // Slightly rotate the arms downward without making them cross
        leftArm.rotation.x = Math.PI / 2.5; // Relaxed downward position for left arm
        rightArm.rotation.x = Math.PI / 2.5; // Relaxed downward position for right arm
        leftArm.rotation.z = 0; // Make sure there is no z-axis rotation
        rightArm.rotation.z = 0; // Make sure there is no z-axis rotation
      }

      // Optionally adjust leg rotations to give a more natural stance
      const leftLeg = scene.getObjectByName("LeftLeg");
      const rightLeg = scene.getObjectByName("RightLeg");

      if (leftLeg && rightLeg) {
        leftLeg.rotation.set(0, 0, Math.PI / 40); // Slight outward rotation
        rightLeg.rotation.set(0, 0, -Math.PI / 40); // Slight outward rotation
      }
    }
  }, [scene]);

  return (
    <group position={[0, -1.8, 1.5]}>
      <primitive object={scene} />
    </group>
  );
}
