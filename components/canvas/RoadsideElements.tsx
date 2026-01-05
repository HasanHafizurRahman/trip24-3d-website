"use client";

import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Group, TextureLoader } from "three";
import { Text } from "@react-three/drei";

function TrafficLight({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) {
    return (
        <group position={position} rotation={rotation || [0, 0, 0]}>
            {/* Pole */}
            <mesh position={[0, 2.5, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 5]} />
                <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
            </mesh>

            {/* Light Housing */}
            <mesh position={[0, 4.5, 0]}>
                <boxGeometry args={[0.5, 1.2, 0.5]} />
                <meshStandardMaterial color="#111" />
            </mesh>

            {/* Red Light */}
            <mesh position={[0, 4.8, 0.26]}>
                <circleGeometry args={[0.15]} />
                <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
            </mesh>

            {/* Yellow Light */}
            <mesh position={[0, 4.5, 0.26]}>
                <circleGeometry args={[0.15]} />
                <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={0.5} />
            </mesh>

            {/* Green Light */}
            <mesh position={[0, 4.2, 0.26]}>
                <circleGeometry args={[0.15]} />
                <meshStandardMaterial color="green" emissive="green" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

function Billboard({ position }: { position: [number, number, number] }) {
    const texture = useLoader(TextureLoader, "/assets/Trip24-Final-Logo.png");

    return (
        <group position={position}>
            {/* Left Pole */}
            <mesh position={[-1.5, 3, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 6]} />
                <meshStandardMaterial color="#555" metalness={0.8} />
            </mesh>
            {/* Right Pole */}
            <mesh position={[1.5, 3, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 6]} />
                <meshStandardMaterial color="#555" metalness={0.8} />
            </mesh>

            {/* Board Frame */}
            <mesh position={[0, 5, 0]}>
                <boxGeometry args={[4.2, 2.2, 0.2]} />
                <meshStandardMaterial color="#111" />
            </mesh>

            {/* Board Face with Logo */}
            <mesh position={[0, 5, 0.11]}>
                <planeGeometry args={[4, 2]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    color="white"
                    emissive="cyan"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Billboard Light Illuminating the Sign */}
            <spotLight
                position={[0, 8, 2]}
                angle={0.6}
                penumbra={1}
                intensity={5}
                target-position={[0, 5, 0]}
                color="white"
            />
        </group>
    );
}

export default function RoadsideElements() {
    const groupRef = useRef<Group>(null);

    // Initial positions for elements
    // We space them out along negative Z (ahead of the camera/truck) so they come towards us
    const elements = useMemo(() => {
        const items = [];
        // Add traffic lights and billboards at intervals
        for (let i = 0; i < 5; i++) {
            const zPos = -100 - (i * 100); // Space them out every 100 units

            // Randomly choose side: -1 (left) or 1 (right)
            const side = i % 2 === 0 ? 1 : -1;

            items.push({
                type: 'light',
                position: [side * 4, 0, zPos] as [number, number, number],
                rotation: [0, side === 1 ? -Math.PI / 4 : Math.PI / 4, 0] as [number, number, number]
            });

            if (i % 2 !== 0) {
                items.push({
                    type: 'billboard',
                    position: [-side * 6, 0, zPos - 50] as [number, number, number] // Offset from light
                });
            }
        }
        return items;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Move the entire group towards the camera (positive Z)
            groupRef.current.position.z += delta * 20; // Match speed with Road.tsx

            // Reset position to loop
            if (groupRef.current.position.z > 500) {
                groupRef.current.position.z = 0;
            }
        }
    });

    return (
        <group ref={groupRef}>
            {elements.map((item, index) => (
                item.type === 'light' ? (
                    <TrafficLight key={index} position={item.position} rotation={item.rotation} />
                ) : (
                    <Billboard key={index} position={item.position} />
                )
            ))}
        </group>
    );
}
