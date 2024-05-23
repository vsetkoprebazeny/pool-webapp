import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function SideTileTwo(props: JSX.IntrinsicElements["mesh"]) {
  const { nodes } = useGLTF("/sideTileTwo.glb") as GLTFResult;
  const { length } = useSnapshot(store);

  let scaleZ =
    length === 7
      ? 1.109
      : length === 6
      ? 1.008
      : length === 5
      ? 0.908
      : length === 4
      ? 0.809
      : 1.21;

  let positionZ =
    length === 7
      ? 7.1
      : length === 6
      ? 6.35
      : length === 5
      ? 5.57
      : length === 4
      ? 4.84
      : 7.85;

  return (
    <group dispose={null}>
      <mesh
        receiveShadow
        {...props}
        scale-z={scaleZ}
        scale-x={1.5}
        geometry={nodes.Cube.geometry}
        position={[16.55, 8.951, positionZ]}
      />
    </group>
  );
}

useGLTF.preload("/sideTileTwo.glb");
