import "./components/gltf-model-plus";

AFRAME.GLTFModelPlus.registerComponent("quack", "quack");
AFRAME.GLTFModelPlus.registerComponent("sound", "sound");
AFRAME.GLTFModelPlus.registerComponent("collision-filter", "collision-filter");
AFRAME.GLTFModelPlus.registerComponent("css-class", "css-class");
AFRAME.GLTFModelPlus.registerComponent("scene-shadow", "scene-shadow");
AFRAME.GLTFModelPlus.registerComponent("super-spawner", "super-spawner");
AFRAME.GLTFModelPlus.registerComponent("gltf-model-plus", "gltf-model-plus");
AFRAME.GLTFModelPlus.registerComponent("media-loader", "media-loader");
AFRAME.GLTFModelPlus.registerComponent("body", "body");
AFRAME.GLTFModelPlus.registerComponent("hide-when-quality", "hide-when-quality");
AFRAME.GLTFModelPlus.registerComponent("light", "light");
AFRAME.GLTFModelPlus.registerComponent("ambient-light", "ambient-light");
AFRAME.GLTFModelPlus.registerComponent("directional-light", "directional-light");
AFRAME.GLTFModelPlus.registerComponent("hemisphere-light", "hemisphere-light");
AFRAME.GLTFModelPlus.registerComponent("point-light", "point-light");
AFRAME.GLTFModelPlus.registerComponent("spot-light", "spot-light");
AFRAME.GLTFModelPlus.registerComponent("skybox", "skybox");
AFRAME.GLTFModelPlus.registerComponent("layers", "layers");
AFRAME.GLTFModelPlus.registerComponent("shadow", "shadow");
AFRAME.GLTFModelPlus.registerComponent("water", "water");
AFRAME.GLTFModelPlus.registerComponent("scale-audio-feedback", "scale-audio-feedback");
AFRAME.GLTFModelPlus.registerComponent("animation-mixer", "animation-mixer");
AFRAME.GLTFModelPlus.registerComponent("loop-animation", "loop-animation");
AFRAME.GLTFModelPlus.registerComponent("shape", "shape");
AFRAME.GLTFModelPlus.registerComponent(
  "box-collider",
  "shape",
  (() => {
    const euler = new THREE.Euler();
    const orientation = new THREE.Quaternion();
    return (el, componentName, componentData) => {
      const { scale, rotation } = componentData;
      euler.set(rotation.x, rotation.y, rotation.z);
      orientation.setFromEuler(euler);
      el.setAttribute(componentName, {
        shape: "box",
        offset: componentData.position,
        halfExtents: { x: scale.x / 2, y: scale.y / 2, z: scale.z / 2 },
        orientation
      });
    };
  })()
);
AFRAME.GLTFModelPlus.registerComponent("visible", "visible");
AFRAME.GLTFModelPlus.registerComponent("spawn-point", "spawn-point");
AFRAME.GLTFModelPlus.registerComponent("hoverable", "hoverable");
AFRAME.GLTFModelPlus.registerComponent("sticky-zone", "sticky-zone");
AFRAME.GLTFModelPlus.registerComponent("nav-mesh", "nav-mesh", (el, _componentName, componentData) => {
  const nav = AFRAME.scenes[0].systems.nav;
  const zone = componentData.zone || "character";
  let found = false;
  el.object3D.traverse(node => {
    if (node.isMesh && !found) {
      found = true;
      nav.loadMesh(node, zone);
    }
  });
});
