"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Preload, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import Truck from "./Truck";
import Road from "./Road";

export default function Scene({ children, ...props }: { children?: React.ReactNode;[key: string]: any }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <Canvas {...props} dpr={[1, 2]}> {/* dpr = device pixel ratio optimization */}
            <PerspectiveCamera makeDefault position={[4, 3, 10]} fov={50} />
            <color attach="background" args={['#151515']} />
            <hemisphereLight intensity={1} groundColor="black" />
            <directionalLight position={[5, 10, 5]} intensity={2} />
            <ambientLight intensity={1} />
            <spotLight position={[0, 10, 0]} intensity={5} angle={0.5} penumbra={1} distance={30} />
            <Suspense fallback={null}>
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Truck />
                <Road />
                {children}
                <Preload all />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} intensity={1.2} />
                    <Noise opacity={0.015} />
                    <Vignette eskil={false} offset={0.1} darkness={0.8} />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
}
