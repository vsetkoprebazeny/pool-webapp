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

export function FrontTile(props: JSX.IntrinsicElements["mesh"]) {
  const { nodes } = useGLTF("/frontTile.glb") as GLTFResult;
  const { width } = useSnapshot(store);

  return (
    <group dispose={null}>
      <mesh
        receiveShadow
        scale-x={width === 3 ? 1.12 : 1.45}
        scale-z={1.35}
        {...props}
        geometry={nodes.Cube.geometry}
        position={[width === 3 ? 12.38 : 12.31, 8.95, -1.865]}
      />
    </group>
  );
}

useGLTF.preload("/frontTile.glb");
