import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  createRef,
} from "react";
import {
  Canvas,
  useFrame,
  createPortal,
  useThree,
  extend,
  MaterialNode,
} from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import "../Home.scss";
import "./Hello.scss";

const vertShader = `
varying vec4 p;
varying vec2 vUv;

void main() {
    vec4 p = vec4( position, 1. );
    gl_Position = projectionMatrix * modelViewMatrix * p;

    vUv = uv;
}
`;

const fragShader = `
    #define SCALE 400.0
    #define SQUEEZE_RATE 100.0
    #define SPEED -50.0
    uniform float time;
    uniform vec2 resolution;

    varying vec2 vUv;

    float zigzag(float n) {
        // 1.33 should be 1.0 for real zigzag
        return abs(mod(n,2.0)-1.33);
    }
    void main() {
        vec2 pixel = (gl_FragCoord.xy -.5 * resolution.xy) / resolution.y;
        float squizeFactor = sin(time / SQUEEZE_RATE) * 2.0 + 1.0;
        pixel = pow(abs(pixel), vec2(squizeFactor));
        pixel *= vec2(SCALE);
        float x = pixel.x;
        float y = pixel.y;
        float t = time * SPEED;    
        gl_FragColor = vec4(
            mod(x + mod(y + t, 64.0) + y + mod(x + t, 64.0), 200.0) / 256.0,
            0,
            mod(x + mod(y + t, 68.0) + y + mod(x + t, 28.0), 250.0) / 256.0,
              1.0
        );
    }
`;

const KaleidoscopMaterial = shaderMaterial(
  // Uniform
  {
    time: 0.0,
    resolution: new THREE.Vector2(),
  },
  //vertex shader
  vertShader,
  //fragment shader
  fragShader
);
extend({ KaleidoscopMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      kaleidoscopMaterial: any;
    }
  }
}

interface PlaneProps {
  size: { x: number; y: number };
}
export function Plane(props: PlaneProps) {
  const [time, setTime] = useState<number>();

  useFrame(({ clock }) => {
    setTime(clock.elapsedTime);
  });
  return (
    <mesh position={[0, 0, -1]}>
      <planeGeometry args={[25, 10]} />
      {/* <meshPhongMaterial color="black"/> */}
      <kaleidoscopMaterial
        time={time}
        resolution={new THREE.Vector2(props.size.x, props.size.y)}
      />
    </mesh>
  );
}

export const Hello: FunctionComponent = () => {
  const canvasWrapper = createRef<HTMLDivElement>();
  const [size, setSize] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  function getCanvasDimensions(): { x: number; y: number } | void {
    if (canvasWrapper.current) {
      return {
        x: canvasWrapper.current.clientWidth * 2,
        y: canvasWrapper.current.clientHeight * 2,
      };
    }
  }
  useEffect(() => {
    function handleResize() {
      setSize({ x: window.innerWidth * 2, y: window.innerHeight * 2 });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="hello-wrapper" className="home-wrapper">
      <h1>Hello</h1>
      <div id="canvas-wrapper" ref={canvasWrapper}>
        <Canvas>
          <Plane size={size} />
        </Canvas>
      </div>
    </div>
  );
};
