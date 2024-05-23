import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    floorTileRight: THREE.Mesh;
    floorTileLeft: THREE.Mesh;
    floorTileTop: THREE.Mesh;
    floorTileBottom: THREE.Mesh;
    foil: THREE.Mesh;
    insideTileRight: THREE.Mesh;
    insideTileLeft: THREE.Mesh;
    insideTileBottom: THREE.Mesh;
    insideTileTop: THREE.Mesh;
  };
  materials: {
    floor: THREE.MeshStandardMaterial;
    foil: THREE.MeshStandardMaterial;
  };
};

export function RealPool({
  floorMaterial,
  foilMaterial,
}: {
  floorMaterial: THREE.Texture;
  foilMaterial: THREE.Texture;
}) {
  const { nodes, materials, scene } = useGLTF("/realpool.glb") as GLTFResult;

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
      ? -0.37
      : length === 6
      ? -0.74
      : length === 5
      ? -1.13
      : length === 4
      ? -1.5
      : 0;

  let poolScaleX = width === 3 ? 1 : 1.3;
  let poolPositionX = width === 3 ? 0 : -3.755;
  let foilScaleZ = width === 3 ? 1.01 : 1.315;

  return (
    <group position={[0, 0, 3.3]} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.foil.geometry}
        material={materials.foil}
        material-map={foilMaterial}
        position={[12.41, 9.036, -4.48]}
        rotation={[0, -1.571, 0]}
        scale={[foilScaleX, foilScaleY, foilScaleZ]}
      />
      <group
        position={[poolPositionX, 0, poolpositionZ]}
        scale={[poolScaleX, 1, poolScaleZ]}
      >
        <mesh
          receiveShadow
          geometry={nodes.floorTileRight.geometry}
          material={materials.floor}
          material-map={floorMaterial}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.floorTileLeft.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.floorTileTop.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.floorTileBottom.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.insideTileRight.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.insideTileLeft.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.insideTileBottom.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes.insideTileTop.geometry}
          material={materials.floor}
          position={[12.354, 9.036, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/realpool.glb");
