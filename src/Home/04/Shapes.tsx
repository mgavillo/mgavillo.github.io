import { useEffect, useRef } from "react";
import * as THREE from "three";
import React from "react";

export function Material() {
  return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

export function Plane() {
  return (
    <mesh position={[0, 0, -1]}>
      <planeGeometry args={[10, 10]} />
      <Material />
    </mesh>
  );
}

export const Cube = () => {
  return (
    <mesh position={[0, 8, 6]}>
      <boxGeometry args={[30, 20, 20]} />
      <meshPhongMaterial
        side={THREE.DoubleSide}
        color="#fff"
        specular="#61dafb"
        shininess={10}
      />
    </mesh>
  );
};

export function Sphere() {
  return (
    <mesh position={[-0.5, -0.5, 0]}>
      <sphereGeometry args={[0.4]} />
      <shadowMaterial attach="material" opacity={1} color="red" />
      <Material />
    </mesh>
  );
}

export function Cone() {
  return (
    <mesh position={[-0.8, 0.4, 0]} rotation={[-0.5, 0, -0.3]}>
      <coneGeometry args={[0.3, 0.6, 20]} />
      <Material />
    </mesh>
  );
}

export const Torus = () => {
  return (
    <mesh position={[0.1, 0.4, 0]} rotation={[-0.5, 0.5, 0]}>
      <torusGeometry args={[0.2, 0.1, 10, 50]} />
      <Material />
    </mesh>
  );
};
