import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Box004001: THREE.Mesh;
    ChamferCyl005: THREE.Mesh;
    ChamferCyl006: THREE.Mesh;
    Box001: THREE.Mesh;
    Box002: THREE.Mesh;
    Box003: THREE.Mesh;
    Box004: THREE.Mesh;
    Box005: THREE.Mesh;
    Mesh002: THREE.Mesh;
    Mesh002_1: THREE.Mesh;
    Mesh002_2: THREE.Mesh;
  };
  materials: {
    ["01 - Default"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshPhysicalMaterial;
  };
};

export function TechincalHouse(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/technicalHouse.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[1.006, 1.033, 0]}
        rotation={[0, -0.002, 0]}
        scale={[0.014, 0.019, 0.011]}
      >
        <mesh
          geometry={nodes.Box004001.geometry}
          material={materials["01 - Default"]}
          position={[0, -48.888, -0.991]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          geometry={nodes.ChamferCyl005.geometry}
          material={materials["01 - Default"]}
          position={[31.507, -0.55, 2.788]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.ChamferCyl006.geometry}
          material={materials["01 - Default"]}
          position={[31.507, -0.55, 3.86]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        geometry={nodes.Box001.geometry}
        material={materials["01 - Default"]}
        position={[0.014, 1.214, -0.768]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box002.geometry}
        material={materials["01 - Default"]}
        position={[-2.046, 0, -1.945]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box003.geometry}
        material={materials["01 - Default"]}
        position={[-2.041, 0, -0.126]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box004.geometry}
        material={materials["01 - Default"]}
        position={[-0.744, 0, -0.125]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box005.geometry}
        material={materials["01 - Default"]}
        position={[-0.746, 0, -1.945]}
        scale={0.025}
      />
      <group position={[-0.536, 0, -0.765]} scale={0.025}>
        <mesh geometry={nodes.Mesh002.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          geometry={nodes.Mesh002_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/technicalHouse.glb");
