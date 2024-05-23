import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../../store";
import { useEffect, useState } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Line005: THREE.Mesh;
    stepOne: THREE.Mesh;
    stepThree: THREE.Mesh;
    stepFour: THREE.Mesh;
    stepFive: THREE.Mesh;
    stepTwo: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    Material002: THREE.MeshStandardMaterial;
  };
};

export function Stair4(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/stair/stair4.glb") as GLTFResult;
  const normal = useTexture("/stairnormals.png");

  const globalState = useSnapshot(store);

  const colors = [
    "#fcecc8",
    "#34a6d2",
    "#bae5f4",
    "#929292",
    "#ffffff",
    "#ffffff",
  ];

  useEffect(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.needsUpdate = true;
  }, [normal]);

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
    <group rotation-y={Math.PI * 1} {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Line005.geometry}
        material={new THREE.MeshStandardMaterial()}
        material-map={tilesMap}
        position={[-0.849, 1.012, 0.719]}
        scale={0.029}
      />

      <group visible={globalState["anti slip pads"] !== undefined}>
        <mesh
          receiveShadow
          geometry={nodes.stepOne.geometry}
          material-normalMap={normal}
          material-normalScale={[1.2, 1.2]}
          material-roughness={0.3}
          material-color={colors[globalState["anti slip pads"]!]}
          material={materials.Material002}
          position={[-0.849, 1.012, 0.719]}
          scale={0.029}
        />
        <mesh
          receiveShadow
          geometry={nodes.stepThree.geometry}
          material={materials.Material002}
          position={[0.296, 0.569, 0.12]}
          scale={0.029}
        />
        <mesh
          receiveShadow
          geometry={nodes.stepFour.geometry}
          material={materials.Material002}
          position={[0.608, 0.37, -0.088]}
          scale={0.029}
        />
        <mesh
          receiveShadow
          geometry={nodes.stepFive.geometry}
          material={materials.Material002}
          position={[0.85, 0.141, -0.303]}
          scale={0.029}
        />
        <mesh
          receiveShadow
          geometry={nodes.stepTwo.geometry}
          material={materials.Material002}
          position={[-0.849, 1.022, 0.719]}
          scale={0.029}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/stair/stair4.glb");
