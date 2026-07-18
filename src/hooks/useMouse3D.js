import { useState, useCallback } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Hook to provide 3D perspective values for framer-motion based on mouse position.
 * Returns event handlers for onMouseMove and onMouseLeave, and style values to apply.
 */
export function useMouse3D(depth = 15) {
  const x = useMotionValue(0.5); // 0 to 1
  const y = useMotionValue(0.5); // 0 to 1

  // Spring configuration for smooth transition back to center
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map 0-1 values to rotation degrees based on depth
  const rotateX = useTransform(springY, [0, 1], [depth, -depth]);
  const rotateY = useTransform(springX, [0, 1], [-depth, depth]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to element (0 to 1)
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  return {
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      rotateX,
      rotateY,
      transformPerspective: 1000,
    }
  };
}
