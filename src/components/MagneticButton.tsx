"use client";

import { useRef, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  strength?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function MagneticButton<T extends ElementType = "div">({
  as,
  children,
  strength = 0.35,
  className,
  ...rest
}: MagneticProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  const Component = motion.create((as ?? "div") as ElementType) as typeof motion.div;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      data-cursor-hover
      {...rest}
    >
      {children}
    </Component>
  );
}
