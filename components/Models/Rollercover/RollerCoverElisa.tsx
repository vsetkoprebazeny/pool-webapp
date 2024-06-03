/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 rollerCoverElisa.glb -t 
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Line001: THREE.Mesh;
    Line004: THREE.Mesh;
    Line009: THREE.Mesh;
    Line010: THREE.Mesh;
    Line011: THREE.Mesh;
    Line012: THREE.Mesh;
    Line013: THREE.Mesh;
    Cube050: THREE.Mesh;
    Plane: THREE.Mesh;
    Line009001: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube036: THREE.Mesh;
    Line001001: THREE.Mesh;
  };
  materials: {
    ["material.001"]: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
  };
};

export function RollerCoverElisa(
  props: JSX.IntrinsicElements["group"] & { lineColor?: string }
) {
  const { nodes, materials, scene } = useGLTF(
    "/rollerCoverElisa.glb"
  ) as GLTFResult;

  useEffect(() => {
    scene.children.map((e) =>
      (e as THREE.Mesh).geometry.computeVertexNormals()
    );
  }, [scene]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Line001.geometry}
        material={materials["material.001"]}
        position={[-0.079, 0.024, 0.004]}
        scale={[1, 0.369, 1]}
      />
      <mesh
        geometry={nodes.Line004.geometry}
        material={materials.material}
        material-color={props.lineColor}
        position={[0, 0, 0.019]}
      />
      <mesh
        geometry={nodes.Line009.geometry}
        material={materials.material}
        position={[0, 0, 0.715]}
      />
      <mesh geometry={nodes.Line010.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Line011.geometry}
        material={materials.material}
        position={[0, 0, 0.389]}
      />
      <mesh
        geometry={nodes.Line012.geometry}
        material={materials.material}
        position={[-0.038, 0.012, 1.735]}
        scale={[1, 0.369, 1]}
      />
      <mesh
        geometry={nodes.Line013.geometry}
        material={materials.material}
        position={[-0.038, 0.012, -1.768]}
        scale={[1, 0.369, 1]}
      />
      <mesh geometry={nodes.Cube050.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Glass}
        position={[-0.285, 0.015, 1.72]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Line009001.geometry}
        material={materials.material}
        position={[0, 0, 1.559]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.material}
        position={[-0.301, 0.209, 0.319]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.material}
        position={[-0.152, 0.209, 0.319]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.material}
        position={[-0.449, 0.209, 0.317]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials.material}
        position={[-0.605, 0.209, 0.317]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.material}
        position={[-0.301, 0.256, 1.202]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.material}
        position={[-0.152, 0.256, 1.202]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.material}
        position={[-0.449, 0.256, 1.2]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.material}
        position={[-0.605, 0.256, 1.2]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials.material}
        position={[-0.301, 0.163, -0.539]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials.material}
        position={[-0.152, 0.163, -0.539]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials.material}
        position={[-0.449, 0.163, -0.541]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials.material}
        position={[-0.605, 0.163, -0.541]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials.material}
        position={[-0.301, 0.116, -1.397]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials.material}
        position={[-0.152, 0.116, -1.397]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials.material}
        position={[-0.449, 0.116, -1.399]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials.material}
        position={[-0.605, 0.116, -1.399]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials.material}
        position={[0.359, 0.209, 0.319]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials.material}
        position={[0.508, 0.209, 0.319]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials.material}
        position={[0.211, 0.209, 0.317]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials.material}
        position={[0.055, 0.209, 0.317]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials.material}
        position={[0.359, 0.256, 1.202]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials.material}
        position={[0.508, 0.256, 1.202]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials.material}
        position={[0.211, 0.256, 1.2]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={materials.material}
        position={[0.055, 0.256, 1.2]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials.material}
        position={[0.359, 0.163, -0.539]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials.material}
        position={[0.508, 0.163, -0.539]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials.material}
        position={[0.211, 0.163, -0.541]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials.material}
        position={[0.055, 0.163, -0.541]}
        scale={[1, 1, 1.02]}
      />
      <mesh
        geometry={nodes.Cube033.geometry}
        material={materials.material}
        position={[0.359, 0.116, -1.397]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials.material}
        position={[0.508, 0.116, -1.397]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={materials.material}
        position={[0.211, 0.116, -1.399]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Cube036.geometry}
        material={materials.material}
        position={[0.055, 0.116, -1.399]}
        scale={[1, 1, 1.06]}
      />
      <mesh
        geometry={nodes.Line001001.geometry}
        material={materials.material}
        position={[-0.079, 0.024, 0.004]}
        scale={[1, 0.369, 1]}
      />
    </group>
  );
}

useGLTF.preload("/rollerCoverElisa.glb");
