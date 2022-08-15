import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/avatar/animated_avatar3.glb"
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes["Wolf3D_Body001"].geometry}
        material={materials["Wolf3D_Body.003"]}
        skeleton={nodes["Wolf3D_Body001"].skeleton}
      />
      <skinnedMesh
        geometry={nodes["Wolf3D_Outfit_Bottom001"].geometry}
        material={materials["Wolf3D_Outfit_Bottom.003"]}
        skeleton={nodes["Wolf3D_Outfit_Bottom001"].skeleton}
      />
      <skinnedMesh
        geometry={nodes["Wolf3D_Outfit_Footwear001"].geometry}
        material={materials["Wolf3D_Outfit_Footwear.003"]}
        skeleton={nodes["Wolf3D_Outfit_Footwear001"].skeleton}
      />
      <skinnedMesh
        geometry={nodes["Wolf3D_Outfit_Top001"].geometry}
        material={materials["Wolf3D_Outfit_Top.003"]}
        skeleton={nodes["Wolf3D_Outfit_Top001"].skeleton}
      />
      <skinnedMesh
        name="EyeLeft001"
        geometry={nodes["EyeLeft001"].geometry}
        material={materials["Wolf3D_Eye.003"]}
        skeleton={nodes["EyeLeft001"].skeleton}
        morphTargetDictionary={nodes["EyeLeft001"].morphTargetDictionary}
        morphTargetInfluences={nodes["EyeLeft001"].morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight001"
        geometry={nodes["EyeRight001"].geometry}
        material={materials["Wolf3D_Eye.003"]}
        skeleton={nodes["EyeRight001"].skeleton}
        morphTargetDictionary={nodes["EyeRight001"].morphTargetDictionary}
        morphTargetInfluences={nodes["EyeRight001"].morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes["Wolf3D_Head001"].geometry}
        material={materials["Wolf3D_Skin.003"]}
        skeleton={nodes["Wolf3D_Head001"].skeleton}
        morphTargetDictionary={nodes["Wolf3D_Head001"].morphTargetDictionary}
        morphTargetInfluences={nodes["Wolf3D_Head001"].morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes["Wolf3D_Teeth001"].geometry}
        material={materials["Wolf3D_Teeth.003"]}
        skeleton={nodes["Wolf3D_Teeth001"].skeleton}
        morphTargetDictionary={nodes["Wolf3D_Teeth001"].morphTargetDictionary}
        morphTargetInfluences={nodes["Wolf3D_Teeth001"].morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/assets/avatar/animated_avatar3.glb");
