import React, { Suspense } from "react";
//CSS
import styled from "styled-components";
//COMPONENTS
import Background from "./components/Background";
import TextSection from "./components/Text";
import Box from "./components/Box"
//3D OBJECTS
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei"
import Sphere from "./components/AnimatedSphere";
import Cube from "./components/Cube";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;


export default function App() {
  return (
    <Wrapper>
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}> 
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}> 
          <Sphere />
        </Suspense>
      </Canvas>
      <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
          <Cube />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
    </Wrapper>
  );
}