import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    stair: THREE.Mesh;
    step02: THREE.Mesh;
    step03: THREE.Mesh;
    step04: THREE.Mesh;
    step05: THREE.Mesh;
    step01: THREE.Mesh;
  };
  materials: {
    stair: THREE.MeshStandardMaterial;
    step: THREE.MeshStandardMaterial;
  };
};

export function Stair2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/stair/stair2.glb") as GLTFResult;

  const globalState = useSnapshot(store);

  const normal = useTexture("/stairnormals.png");

  const colors = [
    "#fcecc8",
    "#34a6d2",
    "#bae5f4",
    "#929292",
    "#ffffff",
    "#ffffff",
  ];

  //tiles map

  const perletoveElbe = useTexture([
    "/foil/perletoveElbe/0.jpg",
    "/foil/perletoveElbe/1.jpg",
    "/foil/perletoveElbe/2.jpg",
  ]);
  const stonelite = useTexture([
    "/foil/stonelite/0.jpg",
    "/foil/stonelite/1.jpg",
    "/foil/stonelite/2.jpg",
    "/foil/stonelite/3.jpg",
  ]);
  const jednofarebneElbeSupra = useTexture([
    "/foil/jednofarebneElbeSupra/0.jpg",
    "/foil/jednofarebneElbeSupra/1.jpg",
    "/foil/jednofarebneElbeSupra/2.jpg",
    "/foil/jednofarebneElbeSupra/3.jpg",
    "/foil/jednofarebneElbeSupra/4.jpg",
  ]);
  const novinkoveElbe = useTexture([
    "/foil/novinkoveElbe/0.jpg",
    "/foil/novinkoveElbe/1.jpg",
    "/foil/novinkoveElbe/2.jpg",
    "/foil/novinkoveElbe/3.jpg",
    "/foil/novinkoveElbe/4.jpg",
    "/foil/novinkoveElbe/5.jpg",
  ]);
  const drevodekorLarchRange = useTexture([
    "/foil/drevodekorLarchRange/0.jpg",
    "/foil/drevodekorLarchRange/1.jpg",
  ]);

  const alkorplanTouch = useTexture([
    "/foil/alkorplanTouch/0.jpg",
    "/foil/alkorplanTouch/1.jpg",
    "/foil/alkorplanTouch/2.jpg",
    "/foil/alkorplanTouch/3.jpg",
    "/foil/alkorplanTouch/4.jpg",
    "/foil/alkorplanTouch/5.jpg",
  ]);

  const mozaikoveElbe = useTexture([
    "/foil/mozaikoveElbe/0.jpg",
    "/foil/mozaikoveElbe/1.jpg",
    "/foil/mozaikoveElbe/2.jpg",
    "/foil/mozaikoveElbe/3.jpg",
  ]);

  useEffect(() => {
    alkorplanTouch.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    mozaikoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    perletoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    stonelite.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    jednofarebneElbeSupra.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    novinkoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    drevodekorLarchRange.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
  }, [
    alkorplanTouch,
    drevodekorLarchRange,
    jednofarebneElbeSupra,
    mozaikoveElbe,
    novinkoveElbe,
    perletoveElbe,
    stonelite,
  ]);

  let AT = globalState["alkorplan touch"];
  let ME = globalState["mozaikove elbe"];
  let PE = globalState["perletove elbe"];
  let DL = globalState["drevodekor larch range"];
  let S = globalState.stonelite;
  let JE = globalState["jednofarebne elbe supra"];
  let NE = globalState["novinkove elbe"];

  const [tilesMap, setTilesMap] = useState<THREE.Texture>(mozaikoveElbe[1]);

  useEffect(() => {
    switch (globalState.foilType) {
      case "alkorplan touch":
        setTilesMap(alkorplanTouch[AT]);
        break;

      case "mozaikove elbe":
        setTilesMap(mozaikoveElbe[ME]);
        break;

      case "perletove elbe":
        setTilesMap(perletoveElbe[PE]);
        break;

      case "stonelite":
        setTilesMap(stonelite[S]);
        break;

      case "jednofarebne elbe supra":
        setTilesMap(jednofarebneElbeSupra[JE]);
        break;

      case "novinkove elbe":
        setTilesMap(novinkoveElbe[NE]);
        break;

      case "drevodekor larch range":
        setTilesMap(drevodekorLarchRange[DL]);
        break;

      default:
        setTilesMap(alkorplanTouch[AT]);
        break;
    }
  }, [
    globalState.foilType,
    alkorplanTouch,
    drevodekorLarchRange,
    jednofarebneElbeSupra,
    mozaikoveElbe,
    novinkoveElbe,
    perletoveElbe,
    stonelite,
    AT,
    ME,
    PE,
    DL,
    S,
    JE,
    NE,
  ]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.stair.geometry}
        material={materials.stair}
        material-map={tilesMap}
        material-metalness={1}
        material-roughness={1}
      />
      <group visible={globalState["anti slip pads"] !== undefined}>
        <mesh
          geometry={nodes.step01.geometry}
          material={materials.step}
          position={[-0.72, 1.172, -0.756]}
          material-color={colors[globalState["anti slip pads"]!]}
          material-normalMap={normal}
          material-roughness={0}
          material-metalness={0}
        />
        <mesh
          geometry={nodes.step02.geometry}
          material={materials.step}
          position={[-0.72, 0.488, -0.756]}
        />
        <mesh
          geometry={nodes.step03.geometry}
          material={materials.step}
          position={[-1.202, 0.262, -0.756]}
        />
        <mesh
          geometry={nodes.step04.geometry}
          material={materials.step}
          position={[-1.682, 0.033, -0.756]}
        />
        <mesh
          geometry={nodes.step05.geometry}
          material={materials.step}
          position={[-2.152, -0.192, -0.756]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/stair/stair2.glb");
