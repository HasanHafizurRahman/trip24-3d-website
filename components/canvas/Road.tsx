"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane, Instance, Instances } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, DoubleSide } from "three";

function LaneLines() {
    const ref = useRef<any>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.position.z -= delta * 20; // Fast speed
            if (ref.current.position.z < -10) {
                ref.current.position.z = 0;
            }
        }
    });

    return (
        <group ref={ref}>
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[0, -0.98, i * 10 - 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[0.2, 4]} />
                    <meshBasicMaterial color="#06b6d4" toneMapped={false} /> {/* Cyan Neon */}
                </mesh>
            ))}
        </group>
    );
}

export default function Road() {
    return (
        <group>
            {/* Dark Reflective Road Surface */}
            <Plane args={[30, 400]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -50]}>
                <meshStandardMaterial
                    color="#050505"
                    roughness={0.1}
                    metalness={0.8}
                />
            </Plane>

            {/* Moving Lines */}
            <LaneLines />

            {/* Side Glow Lines */}
            <Plane args={[0.5, 400]} rotation={[-Math.PI / 2, 0, 0]} position={[-8, -0.99, -50]}>
                <meshBasicMaterial color="#3b82f6" toneMapped={false} transparent opacity={0.5} />
            </Plane>
            <Plane args={[0.5, 400]} rotation={[-Math.PI / 2, 0, 0]} position={[8, -0.99, -50]}>
                <meshBasicMaterial color="#3b82f6" toneMapped={false} transparent opacity={0.5} />
            </Plane>
        </group>
    );
}
