import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// YAHAN DEKHO: 'Environment' import kiya hai
import { OrbitControls, Preload, useGLTF, Center, Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

const IronMan = () => {
  // Model load kiya
  const ironman = useGLTF("./planet/ironman.glb");

  // Original Colors (Koi useEffect nahi)
  return (
    <Center>
      <primitive
        object={ironman.scene}
        // Tumhara set kiya hua scale
        scale={0.0019} 
      />
    </Center>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* --- JADOO YAHAN HAI --- */}
        {/* Ye line Iron Man ko charo taraf se realistic light degi */}
        <Environment preset="city" intensity={1.5} />

        {/* Thodi extra lights shadows ke liye */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        
        <IronMan />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;