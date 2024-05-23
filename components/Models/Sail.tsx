import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    fabric: THREE.Mesh;
    pillar001: THREE.Mesh;
    pillar002: THREE.Mesh;
    pillar003: THREE.Mesh;
  };
  materials: {
    Fabric: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
  };
};

export function Sail(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/sail.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.fabric.geometry}
        material={materials.Fabric}
      />
      <mesh
        castShadow
        geometry={nodes.pillar001.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        geometry={nodes.pillar002.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        geometry={nodes.pillar003.geometry}
        material={materials.metal}
      />
    </group>
  );
}

useGLTF.preload("/sail.glb");
