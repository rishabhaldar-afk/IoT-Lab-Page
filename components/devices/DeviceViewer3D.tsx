"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, ContactShadows, Html } from "@react-three/drei";
import type { Device } from "@/lib/types";
import * as THREE from "three";

// Procedural placeholder geometry based on device category
function PlaceholderModel({ device }: { device: Device }) {
  const groupRef = useRef<THREE.Group>(null);
  const color = new THREE.Color(device.color);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const getGeometry = () => {
    switch (device.category) {
      case "Robotics":
        // Drone-like shape: central body + 4 arms
        return (
          <group ref={groupRef}>
            {/* Central body */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.5, 0.3, 8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.4}
                roughness={0.3}
              />
            </mesh>
            {/* Arms */}
            {[0, 1, 2, 3].map((i) => {
              const angle = (i * Math.PI * 2) / 4;
              const x = Math.cos(angle) * 0.8;
              const z = Math.sin(angle) * 0.8;
              return (
                <group key={i}>
                  <mesh position={[x, 0, z]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
                    <meshStandardMaterial
                      color={color}
                      metalness={0.5}
                      roughness={0.2}
                    />
                  </mesh>
                  {/* Arm connector */}
                  <mesh
                    position={[x / 2, 0, z / 2]}
                    rotation={[0, angle, 0]}
                  >
                    <boxGeometry args={[0.8, 0.05, 0.08]} />
                    <meshStandardMaterial
                      color={color}
                      metalness={0.3}
                      roughness={0.4}
                    />
                  </mesh>
                </group>
              );
            })}
          </group>
        );

      case "Edge Compute":
        // Board-like shape
        return (
          <group ref={groupRef}>
            <mesh>
              <boxGeometry args={[1.2, 0.1, 0.9]} />
              <meshStandardMaterial
                color="#1a5c2a"
                metalness={0.3}
                roughness={0.6}
              />
            </mesh>
            {/* Chips */}
            <mesh position={[0, 0.1, 0]}>
              <boxGeometry args={[0.3, 0.08, 0.3]} />
              <meshStandardMaterial
                color={color}
                metalness={0.6}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[-0.3, 0.08, -0.2]}>
              <boxGeometry args={[0.15, 0.05, 0.15]} />
              <meshStandardMaterial
                color="#333"
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
            {/* Ports */}
            <mesh position={[0.5, 0.06, 0]}>
              <boxGeometry args={[0.15, 0.1, 0.2]} />
              <meshStandardMaterial
                color="#888"
                metalness={0.7}
                roughness={0.2}
              />
            </mesh>
          </group>
        );

      case "Server":
        // Server rack unit
        return (
          <group ref={groupRef}>
            <mesh>
              <boxGeometry args={[1.4, 0.3, 0.8]} />
              <meshStandardMaterial
                color="#2a2a3a"
                metalness={0.6}
                roughness={0.3}
              />
            </mesh>
            {/* Front panel lights */}
            {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
              <mesh key={i} position={[x, 0, 0.41]}>
                <circleGeometry args={[0.02, 16]} />
                <meshStandardMaterial
                  color={i < 3 ? "#00ff44" : color}
                  emissive={i < 3 ? "#00ff44" : color}
                  emissiveIntensity={0.8}
                />
              </mesh>
            ))}
            {/* Drive bays */}
            <mesh position={[0, 0, 0.405]}>
              <boxGeometry args={[0.8, 0.2, 0.01]} />
              <meshStandardMaterial
                color="#1a1a2a"
                metalness={0.5}
                roughness={0.4}
              />
            </mesh>
          </group>
        );

      case "Networking":
        // Switch shape
        return (
          <group ref={groupRef}>
            <mesh>
              <boxGeometry args={[1.3, 0.15, 0.5]} />
              <meshStandardMaterial
                color="#1a2a3a"
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
            {/* Ports */}
            {Array.from({ length: 8 }).map((_, i) => (
              <mesh key={i} position={[-0.5 + i * 0.14, 0, 0.26]}>
                <boxGeometry args={[0.08, 0.06, 0.02]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={0.3}
                />
              </mesh>
            ))}
          </group>
        );

      case "Fabrication":
        // 3D printer / tool shape
        return (
          <group ref={groupRef}>
            {/* Frame */}
            <mesh position={[0, -0.2, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.8]} />
              <meshStandardMaterial
                color="#333"
                metalness={0.4}
                roughness={0.4}
              />
            </mesh>
            {/* Vertical pillars */}
            {[
              [-0.35, 0.3, -0.35],
              [0.35, 0.3, -0.35],
              [-0.35, 0.3, 0.35],
              [0.35, 0.3, 0.35],
            ].map(([x, y, z], i) => (
              <mesh key={i} position={[x, y, z]}>
                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                <meshStandardMaterial
                  color="#666"
                  metalness={0.6}
                  roughness={0.2}
                />
              </mesh>
            ))}
            {/* Top frame */}
            <mesh position={[0, 0.8, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.8]} />
              <meshStandardMaterial
                color="#333"
                metalness={0.4}
                roughness={0.4}
              />
            </mesh>
            {/* Extruder */}
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.05, 0.02, 0.2, 8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
          </group>
        );

      case "Sensing":
        // Sensor/camera shape
        return (
          <group ref={groupRef}>
            <mesh>
              <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
              <meshStandardMaterial
                color="#2a2a3a"
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
            {/* Lens */}
            <mesh position={[0, 0.11, 0]}>
              <cylinderGeometry args={[0.25, 0.2, 0.1, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.7}
                roughness={0.1}
                opacity={0.8}
                transparent
              />
            </mesh>
            {/* Base */}
            <mesh position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.2, 0.2, 16]} />
              <meshStandardMaterial
                color="#1a1a2a"
                metalness={0.4}
                roughness={0.4}
              />
            </mesh>
          </group>
        );

      default:
        return (
          <group ref={groupRef}>
            <mesh>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.3}
                roughness={0.4}
              />
            </mesh>
          </group>
        );
    }
  };

  return getGeometry();
}

interface DeviceViewer3DProps {
  device: Device;
}

export function DeviceViewer3D({ device }: DeviceViewer3DProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [2, 1.5, 2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Stage
          intensity={0.6}
          environment="city"
          adjustCamera={false}
        >
          <PlaceholderModel device={device} />
        </Stage>

        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.3}
          scale={4}
          blur={2.5}
          far={4}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={true}
          enablePan={false}
          minDistance={1.5}
          maxDistance={5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* 3D scan coming soon badge */}
      {!device.hasRealModel && (
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[var(--color-text-muted)] border border-white/50 shadow-sm">
          🔮 3D scan coming soon
        </div>
      )}
    </div>
  );
}
