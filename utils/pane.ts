import { Group, Mesh } from "three";
import { Pane } from "tweakpane";

export const paneHelper = (object: Mesh | Group) => {
  const pane = new Pane();

  pane.addBinding(object.position!, "x", {
    min: -20,
    max: 20,
    step: 0.01,
  });
  pane.addBinding(object.position!, "y", {
    min: -20,
    max: 20,
    step: 0.01,
  });
  pane.addBinding(object.position!, "z", {
    min: -20,
    max: 20,
    step: 0.01,
  });
  pane.addBinding(object.rotation!, "x", {
    min: -Math.PI * 2,
    max: Math.PI * 2,
    step: 0.01,
  });
  pane.addBinding(object.rotation!, "y", {
    min: -Math.PI * 2,
    max: Math.PI * 2,
    step: 0.01,
  });
  pane.addBinding(object.rotation!, "z", {
    min: -Math.PI * 2,
    max: Math.PI * 2,
    step: 0.01,
  });
};
