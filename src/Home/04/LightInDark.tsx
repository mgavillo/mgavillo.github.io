import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Cone, Sphere, Torus, Cube } from "./Shapes";
import * as THREE from "three";
import React from "react";

const Lights = () => {
  const spotLight = useRef<THREE.SpotLight>(null);
  const empty = useRef<THREE.Mesh>(null);

  useFrame((mouse) => {
    if (!empty.current) return;
    empty.current.position.x = mouse.pointer.x * 10;
    empty.current.position.y = mouse.pointer.y * 5;
  });

  useEffect(() => {
    if (!spotLight.current || !empty.current) return;
    spotLight.current.target = empty.current;
  }, []);

  return (
    <>
      <spotLight
        ref={spotLight}
        castShadow
        position={[0, 0, 10]}
        intensity={1}
        distance={10000}
        angle={0.15}
        color="#052287"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        penumbra={0.5}
      />
      <ambientLight color="#061340" />
      <mesh ref={empty} position={[0, 0, -22]} />
    </>
  );
};

interface LightInDarkProps {
  id: string;
  className: string;
}
export const LightInDark = (props: LightInDarkProps) => {
  const cube = useRef();
  const torus = useRef();
  return (
    <Canvas
      id={props.id}
      className={props.className}
      shadows
      camera={{ position: [0, 0, 5], fov: 30 }}
    >
      <Lights />
      <Sphere />
      <Cone />
      <Torus />
      <Cube />
    </Canvas>
  );
};
