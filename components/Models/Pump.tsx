import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    ChamferBox001: THREE.Mesh;
    Box001: THREE.Mesh;
    ChamferBox002: THREE.Mesh;
    Circle002: THREE.Mesh;
    Line001: THREE.Mesh;
    Line002: THREE.Mesh;
    Circle031: THREE.Mesh;
    Circle032: THREE.Mesh;
    Line003: THREE.Mesh;
    Line004: THREE.Mesh;
    Line005: THREE.Mesh;
    Line006: THREE.Mesh;
    Line007: THREE.Mesh;
    Line008: THREE.Mesh;
    Line010: THREE.Mesh;
    Line011: THREE.Mesh;
    Line012: THREE.Mesh;
    Line013: THREE.Mesh;
    Line015: THREE.Mesh;
    Line016: THREE.Mesh;
    Line018: THREE.Mesh;
    Line019: THREE.Mesh;
    Line021: THREE.Mesh;
    Line022: THREE.Mesh;
    Box002: THREE.Mesh;
    ChamferCyl001: THREE.Mesh;
    ChamferCyl002: THREE.Mesh;
    Line023: THREE.Mesh;
    Line024: THREE.Mesh;
    Line026: THREE.Mesh;
    Line027: THREE.Mesh;
    Line029: THREE.Mesh;
    Line030: THREE.Mesh;
    Line032: THREE.Mesh;
    Line033: THREE.Mesh;
    Line034: THREE.Mesh;
    Line035: THREE.Mesh;
    Line037: THREE.Mesh;
    Line038: THREE.Mesh;
    ChamferCyl003: THREE.Mesh;
    ChamferCyl004: THREE.Mesh;
    ChamferCyl005: THREE.Mesh;
    ChamferCyl013: THREE.Mesh;
    ChamferCyl014: THREE.Mesh;
    Box003: THREE.Mesh;
    Box004: THREE.Mesh;
    ChamferCyl006: THREE.Mesh;
    ChamferCyl011: THREE.Mesh;
    ChamferCyl007: THREE.Mesh;
    ChamferCyl009: THREE.Mesh;
    ChamferCyl012: THREE.Mesh;
    ChamferCyl015: THREE.Mesh;
    ChamferCyl008: THREE.Mesh;
    ChamferCyl010: THREE.Mesh;
    Line039: THREE.Mesh;
    Line040: THREE.Mesh;
    whiteCover: THREE.Mesh;
    meter: THREE.Mesh;
    screen: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    whiteCover: THREE.MeshStandardMaterial;
    whiteCoverMeter: THREE.MeshStandardMaterial;
  };
};

export function Pump(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/heatpump.glb") as GLTFResult;

  const globalState = useSnapshot(store);

  return (
    <group
      {...props}
      scale={0.05}
      position={[
        -1.51,
        0.01,
        globalState["technology house"] === "show" ? 0.62 : 2,
      ]}
      rotation-y={Math.PI * 1}
      dispose={null}
    >
      <mesh
        geometry={nodes.ChamferBox001.geometry}
        material={materials["Material.001"]}
        material-color={globalState["heat pump"]}
        position={[-0.003, 2.941, -0.888]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box001.geometry}
        material={materials["Material.001"]}
        position={[0, 0.255, -0.328]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferBox002.geometry}
        material={materials["Material.001"]}
        position={[1.613, 2.255, 0.313]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials["Material.001"]}
        position={[-0.763, 1.383, -0.31]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.022, 0.025, 0.022]}
      />
      <mesh
        geometry={nodes.Line001.geometry}
        material={materials["Material.001"]}
        position={[-0.763, 1.368, 0.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line002.geometry}
        material={materials["Material.001"]}
        position={[-0.76, 1.389, 0.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Circle031.geometry}
        material={materials["Material.001"]}
        position={[-0.767, 1.391, 0.415]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.008, 0.025, 0.008]}
      />
      <mesh
        geometry={nodes.Circle032.geometry}
        material={materials["Material.001"]}
        position={[-0.764, 1.393, 0.332]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line003.geometry}
        material={materials["Material.001"]}
        position={[-0.325, 1.791, 0.397]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line004.geometry}
        material={materials["Material.001"]}
        position={[-1.15, 1.791, 0.397]}
        rotation={[-1.571, 1.543, 3.141]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line005.geometry}
        material={materials["Material.001"]}
        position={[-1.15, 0.976, 0.397]}
        rotation={[-Math.PI / 2, -0.07, Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line006.geometry}
        material={materials["Material.001"]}
        position={[-0.358, 0.976, 0.397]}
        rotation={[-Math.PI / 2, -1.489, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line007.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 2.575, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line008.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 2.44, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line010.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 2.168, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line011.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 2.033, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line012.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 1.897, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line013.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 1.761, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line015.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 1.49, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line016.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 1.354, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line018.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 1.073, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line019.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 0.928, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line021.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 0.637, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line022.geometry}
        material={materials["Material.001"]}
        position={[-0.558, 0.372, -0.856]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box002.geometry}
        material={materials["Material.001"]}
        position={[-0.622, 1.377, -0.512]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl001.geometry}
        material={materials["Material.001"]}
        position={[1.599, 1.613, -0.869]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl002.geometry}
        material={materials["Material.001"]}
        position={[1.599, 0.509, -0.869]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line023.geometry}
        material={materials["Material.001"]}
        position={[0.611, 1.61, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line024.geometry}
        material={materials["Material.001"]}
        position={[0.346, 1.608, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line026.geometry}
        material={materials["Material.001"]}
        position={[0.055, 1.606, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line027.geometry}
        material={materials["Material.001"]}
        position={[-0.091, 1.605, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line029.geometry}
        material={materials["Material.001"]}
        position={[-0.372, 1.603, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line030.geometry}
        material={materials["Material.001"]}
        position={[-0.507, 1.602, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line032.geometry}
        material={materials["Material.001"]}
        position={[-0.779, 1.6, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line033.geometry}
        material={materials["Material.001"]}
        position={[-0.914, 1.599, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line034.geometry}
        material={materials["Material.001"]}
        position={[-1.05, 1.598, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line035.geometry}
        material={materials["Material.001"]}
        position={[-1.186, 1.597, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line037.geometry}
        material={materials["Material.001"]}
        position={[-1.457, 1.595, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line038.geometry}
        material={materials["Material.001"]}
        position={[-1.593, 1.594, -0.825]}
        rotation={[-1.57, 1.563, -0.001]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl003.geometry}
        material={materials["Material.001"]}
        position={[-1.945, 0.337, -0.995]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl004.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.19, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl005.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.087, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl013.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.087, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl014.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.19, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box003.geometry}
        material={materials["Material.001"]}
        position={[1.701, 0.184, -0.298]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box004.geometry}
        material={materials["Material.001"]}
        position={[-1.77, 0.184, -0.298]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl006.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.14, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl011.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.14, 0.112]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl007.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.19, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl009.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.087, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl012.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.087, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl015.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.19, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl008.geometry}
        material={materials["Material.001"]}
        position={[1.706, 0.14, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl010.geometry}
        material={materials["Material.001"]}
        position={[-1.766, 0.14, -0.713]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line039.geometry}
        material={materials["Material.001"]}
        position={[1.707, 0.22, -0.304]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Line040.geometry}
        material={materials["Material.001"]}
        position={[-1.764, 0.22, -0.304]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.025}
      />
      <group visible={globalState["heat pump"] === "silver"}>
        <mesh
          geometry={nodes.whiteCover.geometry}
          material={materials["Material.001"]}
          position={[-0.013, 2.059, 0.393]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.meter.geometry}
          position={[1.434, 2.595, 0.234]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.289}
        >
          <meshStandardMaterial
            {...materials["Material.001"]}
            color={"black"}
          />
        </mesh>
        <mesh
          geometry={nodes.screen.geometry}
          material={materials.whiteCoverMeter}
          position={[1.434, 2.644, 0.531]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.16, 0.16, 0.059]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/heatpump.glb");
