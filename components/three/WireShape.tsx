'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WireShapeProps {
  geometry: 'torusKnot' | 'octahedron' | 'icosahedron' | 'torus';
  position: [number, number, number];
  color: number;
  rotSpeed: [number, number, number];
  baseY: number;
  offset: number;
}

export default function WireShape({ geometry, position, color, rotSpeed, baseY, offset }: WireShapeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
    ref.current.position.y = baseY + Math.sin(t + offset) * 0.3;
  });

  const geo = {
    torusKnot: <torusKnotGeometry args={[0.4, 0.12, 80, 16]} />,
    octahedron: <octahedronGeometry args={[0.5, 0]} />,
    icosahedron: <icosahedronGeometry args={[0.5, 0]} />,
    torus: <torusGeometry args={[0.4, 0.1, 12, 40]} />,
  }[geometry];

  return (
    <mesh ref={ref} position={position}>
      {geo}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
    </mesh>
  );
}
