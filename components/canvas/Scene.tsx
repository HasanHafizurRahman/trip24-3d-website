"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Preload, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import Truck from "./Truck";
import Road from "./Road";
import RoadsideElements from "./RoadsideElements";
import SkyEnhancements from "./SkyEnhancements";

export default function Scene({ children, ...props }: { children?: React.ReactNode;[key: string]: any }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <Canvas {...props} dpr={[1, 2]}> {/* dpr = device pixel ratio optimization */}
            <PerspectiveCamera makeDefault position={[4, 3, 10]} fov={50} />
            <color attach="background" args={['#0a0a0f']} />
            <hemisphereLight intensity={0.8} groundColor="#020210" />
            <directionalLight position={[5, 10, 5]} intensity={2} color="#e0f0ff" />
            <ambientLight intensity={0.6} color="#102030" />
            <spotLight position={[0, 10, 0]} intensity={5} angle={0.5} penumbra={1} distance={30} color="#80d0ff" />
            <Suspense fallback={null}>
                <Stars radius={150} depth={80} count={5000} factor={5} saturation={0.5} fade speed={0.5} />
                <SkyEnhancements />
                <Truck />
                <Road />
                <RoadsideElements />
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
