'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CodePanelProps {
  code: string;
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  offset: number;
}

export default function CodePanel({ code, position, rotation, speed, offset }: CodePanelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 320;
    const ctx = c.getContext('2d')!;

    // Background gradient
    const grd = ctx.createLinearGradient(0, 0, c.width, c.height);
    grd.addColorStop(0, 'rgba(8,8,14,0.95)');
    grd.addColorStop(1, 'rgba(15,15,22,0.95)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);

    // Header bar
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, c.width, 40);

    // Window dots
    ['#FF006E', '#FFB800', '#00FF88'].forEach((col, i) => {
      ctx.beginPath();
      ctx.arc(20 + i * 22, 20, 7, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
    });

    // Code with naive syntax highlighting
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    code.split('\n').forEach((line, i) => {
      const y = 80 + i * 32;
      let x = 24;
      line.split(/(\s+)/).forEach((tok) => {
        let color = '#e0e0e8';
        if (/^(const|let|var|function|return|if|else|await|async|import|from|export|new)$/.test(tok)) color = '#FF006E';
        else if (/^['"`].*['"`]$/.test(tok)) color = '#00FF88';
        else if (/^[A-Z][A-Za-z0-9]+$/.test(tok)) color = '#00FFFF';
        else if (tok.startsWith('//')) color = '#4a4a55';
        ctx.fillStyle = color;
        ctx.fillText(tok, x, y);
        x += ctx.measureText(tok).width;
      });
    });

    // Border
    ctx.strokeStyle = 'rgba(0,255,255,0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, c.width - 2, c.height - 2);

    return new THREE.CanvasTexture(c);
  }, [code]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.25;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[2.4, 1.5]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}
