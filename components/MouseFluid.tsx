"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function MouseFluid() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 150 };
  
  // Multiple springs with different delays for fluid effect
  const x1 = useSpring(mouseX, { ...springConfig, damping: 20 });
  const y1 = useSpring(mouseY, { ...springConfig, damping: 20 });
  
  const x2 = useSpring(mouseX, { ...springConfig, damping: 30 });
  const y2 = useSpring(mouseY, { ...springConfig, damping: 30 });
  
  const x3 = useSpring(mouseX, { ...springConfig, damping: 40 });
  const y3 = useSpring(mouseY, { ...springConfig, damping: 40 });
  
  const x4 = useSpring(mouseX, { ...springConfig, damping: 50 });
  const y4 = useSpring(mouseY, { ...springConfig, damping: 50 });
  
  const x5 = useSpring(mouseX, { ...springConfig, damping: 60 });
  const y5 = useSpring(mouseY, { ...springConfig, damping: 60 });

  useEffect(() => {
    setIsClient(true);
    
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      size: 100 + Math.random() * 150,
      delay: i * 0.05,
    }));
    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient, mouseX, mouseY]);

  if (!isClient) return null;

  const orbs = [
    { x: x1, y: y1, size: 300, opacity: 0.15, blur: 80 },
    { x: x2, y: y2, size: 250, opacity: 0.12, blur: 70 },
    { x: x3, y: y3, size: 200, opacity: 0.1, blur: 60 },
    { x: x4, y: y4, size: 150, opacity: 0.08, blur: 50 },
    { x: x5, y: y5, size: 100, opacity: 0.06, blur: 40 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main fluid orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            x: orb.x,
            y: orb.y,
            width: orb.size,
            height: orb.size,
            marginLeft: -orb.size / 2,
            marginTop: -orb.size / 2,
            background: `radial-gradient(circle, rgba(249, 115, 22, ${orb.opacity}) 0%, rgba(255, 69, 0, ${orb.opacity * 0.5}) 50%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
        />
      ))}

      {/* Smaller trailing particles */}
      {[x2, x3, x4, x5].map((xVal, i) => {
        const yVal = [y2, y3, y4, y5][i];
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              x: xVal,
              y: yVal,
              width: 20 + i * 10,
              height: 20 + i * 10,
              marginLeft: -(20 + i * 10) / 2 + (i % 2 === 0 ? 50 : -50),
              marginTop: -(20 + i * 10) / 2 + (i % 2 === 0 ? -30 : 30),
              background: `radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)`,
              filter: `blur(${10 + i * 5}px)`,
            }}
          />
        );
      })}

      {/* Glow effect at cursor position */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: x1,
          y: y1,
          width: 400,
          height: 400,
          marginLeft: -200,
          marginTop: -200,
          background: `radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 60%)`,
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
