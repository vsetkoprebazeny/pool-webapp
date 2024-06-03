import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

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
  const { materials } = useGLTF("/realpool.glb") as any;
  const { floors } = useSnapshot(store);

  const handleFloor = () => {
    switch (floors) {
      case 0:
        return materials.floor00.map;
      case 1:
        return materials.floor01.map;
      case 2:
        return materials.floor02.map;
      case 3:
        return materials.floor03.map;
      case 4:
        return materials.floor04.map;
      case 5:
        return materials.floor05.map;
      case 6:
        return materials.floor06.map;
      case 7:
        return materials.floor07.map;
      case 8:
        return materials.floor08.map;
      case 9:
        return materials.floor09.map;
      case 10:
        return materials.floor10.map;
      case 11:
        return materials.floor11.map;

      default:
        return materials.floor00.map;
    }
  };

  return (
    <group dispose={null}>
      <mesh {...props} geometry={nodes.Cube004.geometry}>
        <meshStandardMaterial map={handleFloor()} roughness={1} metalness={1} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/showerFloor.glb");
useGLTF.preload("/realpool.glb");
