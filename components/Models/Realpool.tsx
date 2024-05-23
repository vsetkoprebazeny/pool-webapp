import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    foil: THREE.Mesh;
    floor00: THREE.Mesh;
    floor01: THREE.Mesh;
    floor02: THREE.Mesh;
    floor03: THREE.Mesh;
    floor04: THREE.Mesh;
    floor05: THREE.Mesh;
  };
  materials: {
    foil: THREE.MeshStandardMaterial;
    floor00: THREE.MeshStandardMaterial;
    floor01: THREE.MeshStandardMaterial;
    floor02: THREE.MeshStandardMaterial;
    floor03: THREE.MeshStandardMaterial;
    floor04: THREE.MeshStandardMaterial;
    floor05: THREE.MeshStandardMaterial;
  };
};

const Floor = () => {
  const { nodes, materials } = useGLTF("/realpool.glb") as GLTFResult;
  const { floors } = useSnapshot(store);
  switch (floors) {
    case 7:
      return (
        <mesh
          geometry={nodes.floor00.geometry}
          material={materials.floor00}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 1:
      return (
        <mesh
          geometry={nodes.floor01.geometry}
          material={materials.floor01}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 6:
      return (
        <mesh
          geometry={nodes.floor02.geometry}
          material={materials.floor02}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 3:
      return (
        <mesh
          geometry={nodes.floor03.geometry}
          material={materials.floor03}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 5:
      return (
        <mesh
          geometry={nodes.floor04.geometry}
          material={materials.floor04}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 0:
      return (
        <mesh
          geometry={nodes.floor05.geometry}
          material={materials.floor05}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    default:
      return (
        <mesh
          geometry={nodes.floor00.geometry}
          material={materials.floor00}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
  }
};

export function RealPool({ foilMaterial }: { foilMaterial: THREE.Texture }) {
  const { nodes, materials } = useGLTF("/realpool.glb") as GLTFResult;

  const { depth, length, width } = useSnapshot(store);

  let foilScaleY = depth === 1.2 ? 0.56 : 0.67;

  let foilScaleX =
    length === 7
      ? 1.096
      : length === 6
      ? 0.997
      : length === 5
      ? 0.895
      : length === 4
      ? 0.796
      : 1.195;

  let poolScaleZ =
    length === 7
      ? 1.1
      : length === 6
      ? 1
      : length === 5
      ? 0.9
      : length === 4
      ? 0.8
      : 1.2;

  let poolpositionZ =
    length === 7
      ? 3.08
      : length === 6
      ? 2.71
      : length === 5
      ? 2.32
      : length === 4
      ? 1.95
      : 3.45;

  let poolScaleX = width === 3 ? 1 : 1.3;
  let poolPositionX = width === 3 ? 0 : -3.755;
  let foilScaleZ = width === 3 ? 1.01 : 1.315;

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.foil.geometry}
        material={materials.foil}
        material-map={foilMaterial}
        position={[12.36, 9.06, -1.15]}
        rotation={[0, -1.571, 0]}
        scale={[foilScaleX, foilScaleY, foilScaleZ]}
      />
      <group
        position={[poolPositionX, 0, poolpositionZ]}
        scale={[poolScaleX, 1, poolScaleZ]}
      >
        <Floor />
      </group>
    </group>
  );
}

useGLTF.preload("/realpool.glb");
