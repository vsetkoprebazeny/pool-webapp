import { PerspectiveCamera } from "@react-three/drei";
import { PerspectiveCamera as PC } from "three";
import { useRef } from "react";

const Camera = () => {
  const camera = useRef<PC>(null);

  // useEffect(() => {
  //   const pane = new Pane();

  //   pane.addBinding(camera.current?.position!, "x", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(camera.current?.position!, "y", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(camera.current?.position!, "z", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(camera.current?.rotation!, "x", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  //   pane.addBinding(camera.current?.rotation!, "y", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  //   pane.addBinding(camera.current?.rotation!, "z", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  // }, []);

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      position={[1.5, 0.7, 0]}
      rotation={[0, 1.6, 0.4, "XZY"]}
    />
  );
};

export default Camera;
