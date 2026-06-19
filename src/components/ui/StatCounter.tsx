import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface StatCounterProps {
  prefix?: string;
  endValue: number;
  suffix?: string;
  label: string;
  subLabel?: string;
}

export default function StatCounter({ prefix = '', endValue, suffix = '', label, subLabel }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isCountingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCountingRef.current) {
          isCountingRef.current = true;
          let start = 0;
          const end = endValue;
          const duration = 1500; // 1.5s animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * (end - start) + start);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [endValue]);

  return (
    <div
      ref={elementRef}
      id={`stat-box-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className="bg-[#0B2545]/20 backdrop-blur-sm border border-white/10 rounded-xs p-6 md:p-8 flex flex-col justify-center text-center transition-all duration-300 hover:border-[#00AEEF]/30 hover:bg-[#0B2545]/45 hover:shadow-lg hover:shadow-[#00AEEF]/5"
    >
      {/* Numbers */}
      <span className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-accent tracking-tight mb-2">
        {prefix}
        {count}
        {suffix}
      </span>
      
      {/* Core metric label */}
      <span className="font-sans font-semibold text-sm text-white tracking-wide">
        {label}
      </span>

      {/* Sublabel descriptor */}
      {subLabel && (
        <span className="font-sans text-[11px] text-gray-400 mt-1 font-light leading-snug">
          {subLabel}
        </span>
      )}
    </div>
  );
}
