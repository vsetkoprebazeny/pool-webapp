import * as THREE from "three";
// import React, { useEffect, useRef } from "react";
// import { Pane } from "tweakpane";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ChamferCyl001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Light(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/light.glb") as GLTFResult;
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
      scale={0.02}
      // ref={model}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.ChamferCyl001.geometry}
        material={materials["Material.001"]}
        position={[-0.021, 0, -0.025]}
        scale={[0.023, 0.025, 0.02]}
      />
    </group>
  );
}

useGLTF.preload("/light.glb");
