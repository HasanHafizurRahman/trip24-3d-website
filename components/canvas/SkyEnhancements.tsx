"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shooting Star component
function ShootingStar() {
    const ref = useRef<THREE.Mesh>(null);
    const trailRef = useRef<THREE.Mesh>(null);

    const startPosition = useMemo(() => ({
        x: (Math.random() - 0.5) * 200,
        y: Math.random() * 50 + 30,
        z: (Math.random() - 0.5) * 200
    }), []);

    const speed = useMemo(() => Math.random() * 2 + 1, []);
    const delay = useMemo(() => Math.random() * 20, []);

    useFrame((state) => {
        if (ref.current && trailRef.current) {
            const time = (state.clock.elapsedTime + delay) % 25;

            if (time < 2) {
                const progress = time / 2;
                ref.current.position.x = startPosition.x - progress * 50;
                ref.current.position.y = startPosition.y - progress * 30;
                ref.current.position.z = startPosition.z;
                ref.current.visible = true;

                trailRef.current.position.copy(ref.current.position);
                trailRef.current.position.x += 5;
                trailRef.current.position.y += 3;
                trailRef.current.visible = true;

                (ref.current.material as THREE.MeshBasicMaterial).opacity = 1 - progress * 0.5;
                (trailRef.current.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.6;
            } else {
                ref.current.visible = false;
                trailRef.current.visible = false;
            }
        }
    });

    return (
        <>
            <mesh ref={ref} visible={false}>
                <sphereGeometry args={[0.15, 8, 8]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={1} />
            </mesh>
            <mesh ref={trailRef} rotation={[0, 0, Math.PI / 4]} visible={false}>
                <planeGeometry args={[10, 0.1]} />
                <meshBasicMaterial
                    color="#06b6d4"
                    transparent
                    opacity={0.6}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>
    );
}

// Nebula/Cloud effect
function Nebula() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <mesh ref={ref} position={[0, 20, -100]} rotation={[0, 0, 0]}>
            <planeGeometry args={[500, 250]} />
            <meshBasicMaterial transparent opacity={0.15}>
                <primitive attach="map" object={createNebulaTexture()} />
            </meshBasicMaterial>
        </mesh>
    );
}

// Create procedural nebula texture
function createNebulaTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    // Create gradient background
    const gradient = ctx.createRadialGradient(256, 128, 0, 256, 128, 256);
    gradient.addColorStop(0, "rgba(6, 182, 212, 0.3)");
    gradient.addColorStop(0.3, "rgba(59, 130, 246, 0.2)");
    gradient.addColorStop(0.6, "rgba(139, 92, 246, 0.1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);

    // Add some noise/stars
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        const size = Math.random() * 2;
        const alpha = Math.random() * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// Twinkling Stars enhancement
function TwinklingStars() {
    const starsRef = useRef<THREE.Points>(null);

    const { positions, colors, sizes } = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const radius = 150;

            // Spherical distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = Math.abs(radius * Math.cos(phi) * 0.5) + 10; // Keep above horizon
            positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

            // Color variation (white to cyan to blue)
            const colorChoice = Math.random();
            if (colorChoice < 0.6) {
                colors[i3] = 1; colors[i3 + 1] = 1; colors[i3 + 2] = 1; // White
            } else if (colorChoice < 0.85) {
                colors[i3] = 0.4; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1; // Cyan
            } else {
                colors[i3] = 0.3; colors[i3 + 1] = 0.5; colors[i3 + 2] = 1; // Blue
            }

            sizes[i] = Math.random() * 2 + 0.5;
        }

        return { positions, colors, sizes };
    }, []);

    useFrame((state) => {
        if (starsRef.current) {
            const geometry = starsRef.current.geometry;
            const sizesAttr = geometry.getAttribute("size") as THREE.BufferAttribute;

            for (let i = 0; i < sizesAttr.count; i++) {
                const twinkle = Math.sin(state.clock.elapsedTime * (2 + Math.random()) + i) * 0.5 + 0.5;
                sizesAttr.setX(i, sizes[i] * (0.5 + twinkle * 0.5));
            }
            sizesAttr.needsUpdate = true;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[sizes, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={1.5}
                vertexColors
                transparent
                opacity={0.9}
                sizeAttenuation
            />
        </points>
    );
}

// Aurora/Horizon Glow
function AuroraGlow() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const material = ref.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    const shaderMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec2 vUv;
                
                void main() {
                    float wave = sin(vUv.x * 10.0 + uTime * 0.5) * 0.5 + 0.5;
                    float gradient = 1.0 - vUv.y;
                    
                    vec3 color1 = vec3(0.02, 0.71, 0.83); // Cyan
                    vec3 color2 = vec3(0.23, 0.51, 0.96); // Blue
                    
                    vec3 color = mix(color1, color2, wave);
                    float alpha = gradient * 0.15 * (0.5 + wave * 0.5);
                    
                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        });
    }, []);

    return (
        <mesh ref={ref} position={[0, 5, -150]} rotation={[0, 0, 0]}>
            <planeGeometry args={[400, 160]} />
            <primitive object={shaderMaterial} attach="material" />
        </mesh>
    );
}

export default function SkyEnhancements() {
    return (
        <group>
            <TwinklingStars />
            <Nebula />
            <AuroraGlow />
            {/* Multiple shooting stars */}
            {[...Array(5)].map((_, i) => (
                <ShootingStar key={i} />
            ))}
        </group>
    );
}
