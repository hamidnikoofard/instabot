"use client";
import { useEffect } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let isRunning = false;

    const updateScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.3; 
      window.scrollTo(0, currentScroll);

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        isRunning = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault(); 
      targetScroll += e.deltaY;
      targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));

      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return <>{children}</>;
}
