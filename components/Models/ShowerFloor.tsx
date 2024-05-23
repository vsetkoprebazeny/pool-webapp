import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function ShowerFloor(props: JSX.IntrinsicElements["mesh"]) {
  const { nodes } = useGLTF("/showerFloor.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh {...props} geometry={nodes.Cube004.geometry} />
    </group>
  );
}

useGLTF.preload("/showerFloor.glb");
