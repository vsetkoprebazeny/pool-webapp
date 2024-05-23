import * as THREE from "three";
// import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
// import { Pane } from "tweakpane";

type GLTFResult = GLTF & {
  nodes: {
    model001_1: THREE.Mesh;
    model001_2: THREE.Mesh;
  };
  materials: {
    wire_255255221: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Cleaner(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cleaner.glb") as GLTFResult;
  // const model = useRef<THREE.Group>(null);

  // useEffect(() => {
  //   const pane = new Pane();

  //   pane.addBinding(model.current?.position!, "x", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(model.current?.position!, "y", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(model.current?.position!, "z", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(model.current?.rotation!, "y", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  // }, []);
  return (
    <group
      scale={0.001}
      position={[-1.17, -0.028, 1.24]}
      rotation-y={Math.PI * 0.5}
      // ref={model}
      {...props}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.model001_1.geometry}
          material={materials.wire_255255221}
        />
        <mesh
          geometry={nodes.model001_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cleaner.glb");
