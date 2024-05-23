import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Parasol_Parasol_fabric_0: THREE.Mesh;
    Parasol_Parasol_frame_0: THREE.Mesh;
    Parasol_Parasol_metaal_0: THREE.Mesh;
    Parasol_Parasol_stone_0: THREE.Mesh;
  };
  materials: {
    Parasol_fabric: THREE.MeshStandardMaterial;
    Parasol_frame: THREE.MeshStandardMaterial;
    Parasol_metaal: THREE.MeshStandardMaterial;
    Parasol_stone: THREE.MeshStandardMaterial;
  };
};

export function Umbrella(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/umbrella.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Parasol_Parasol_fabric_0.geometry}
        material={materials.Parasol_fabric}
      />
      <mesh
        castShadow
        geometry={nodes.Parasol_Parasol_frame_0.geometry}
        material={materials.Parasol_frame}
      />
      <mesh
        castShadow
        geometry={nodes.Parasol_Parasol_metaal_0.geometry}
        material={materials.Parasol_metaal}
      />
      <mesh
        castShadow
        geometry={nodes.Parasol_Parasol_stone_0.geometry}
        material={materials.Parasol_stone}
      />
    </group>
  );
}

useGLTF.preload("/umbrella.glb");
