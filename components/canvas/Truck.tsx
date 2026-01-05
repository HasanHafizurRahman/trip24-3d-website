"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import { Group } from "three";

export default function Truck() {
    const truckRef = useRef<Group>(null);

    // Load the GLB model
    const { scene } = useGLTF("/assets/NissanFrontierPickupTruck.glb");

    useFrame((state, delta) => {
        if (truckRef.current) {
            // Subtle chassis rumble
            truckRef.current.position.y = Math.sin(state.clock.elapsedTime * 20) * 0.02;
            // Banking on simulated turns
            truckRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
        }
    });

    return (
        <group ref={truckRef} position={[0, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
                {/* The loaded GLB model */}
                <primitive
                    object={scene}
                    scale={900}
                    position={[0, 0.5, 0]}
                    rotation={[0, 0, 0]} // Back-facing (show rear of truck)
                />
            </Float>
        </group>
    );
}

// Preload the model for better performance
useGLTF.preload("/assets/NissanFrontierPickupTruck.glb");
