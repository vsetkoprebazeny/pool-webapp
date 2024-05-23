import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Collar: THREE.Mesh;
    Line001: THREE.Mesh;
    Line002: THREE.Mesh;
    Line003: THREE.Mesh;
    Line005: THREE.Mesh;
    Support001: THREE.Mesh;
    Suppoort002: THREE.Mesh;
    center: THREE.Mesh;
    Cube046: THREE.Mesh;
    Glass003: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Line003001: THREE.Mesh;
    Line003002: THREE.Mesh;
    Glass001: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
  };
  materials: {
    metal: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
  };
};

export function RollerCoverBlack(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials, scene } = useGLTF(
    "/rollerCoverBlack.glb"
  ) as GLTFResult;
  useEffect(() => {
    scene.children.map((e) =>
      (e as THREE.Mesh).geometry.computeVertexNormals()
    );
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Collar.geometry}
        material={materials.metal}
        position={[-0.078, 0.019, 0.004]}
      />
      <mesh
        geometry={nodes.Line001.geometry}
        material={materials.metal}
        position={[-0.097, 0.12, 1.698]}
      />
      <mesh
        geometry={nodes.Line002.geometry}
        material={materials.metal}
        position={[-0.097, 0.12, 0.95]}
      />
      <mesh
        geometry={nodes.Line003.geometry}
        material={materials.metal}
        position={[-0.097, 0.12, 0.052]}
      />
      <mesh
        geometry={nodes.Line005.geometry}
        material={materials.metal}
        position={[-0.071, 0.123, -1.732]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.025, 0.025, 0.009]}
      />
      <mesh
        geometry={nodes.Support001.geometry}
        material={materials.metal}
        position={[-0.036, 0.006, 1.735]}
      />
      <mesh
        geometry={nodes.Suppoort002.geometry}
        material={materials.metal}
        position={[-0.036, 0.006, -1.736]}
      />
      <mesh
        geometry={nodes.center.geometry}
        material={materials.metal}
        position={[-0.002, 0.105, 0.135]}
      />
      <mesh
        geometry={nodes.Cube046.geometry}
        material={materials.metal}
        position={[0.552, 0.301, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Glass003.geometry}
        material={materials.Glass}
        position={[-0.053, 0.095, -2.229]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.metal}
        position={[0.401, 0.319, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.metal}
        position={[0.25, 0.333, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.metal}
        position={[0.111, 0.337, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.metal}
        position={[-0.157, 0.341, -1.517]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.metal}
        position={[-0.308, 0.339, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.metal}
        position={[-0.459, 0.333, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.metal}
        position={[-0.598, 0.337, -1.499]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.226]}
      />
      <mesh
        geometry={nodes.Line003001.geometry}
        material={materials.metal}
        position={[-0.097, 0.12, -0.85]}
      />
      <mesh
        geometry={nodes.Line003002.geometry}
        material={materials.metal}
        position={[-0.056, 0.161, 0.052]}
      />
      <mesh
        geometry={nodes.Glass001.geometry}
        material={materials.Glass}
        position={[0.413, -0.851, -2.411]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.metal}
        position={[0.551, 0.349, -0.399]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.221]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.metal}
        position={[0.402, 0.371, -0.399]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.221]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.metal}
        position={[0.251, 0.378, -0.399]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.221]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials.metal}
        position={[0.109, 0.384, -0.399]}
        rotation={[-3.137, 0.001, -0.001]}
        scale={[-0.008, -0.007, -0.221]}
      />
    </group>
  );
}

useGLTF.preload("/rollerCoverBlack.glb");
