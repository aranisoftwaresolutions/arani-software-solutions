"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  direction = "up",
  className = "" 
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const yValue = direction === "up" ? -100 * speed : 100 * speed;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: yValue,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
