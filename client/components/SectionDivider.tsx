interface SectionDividerProps {
  color?: string;
  flipped?: boolean;
}

export default function SectionDivider({
  color = "from-craft-purple to-pink",
  flipped = false,
}: SectionDividerProps) {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        style={{
          transform: flipped ? "scaleY(-1)" : "none",
        }}
      >
        <defs>
          <linearGradient
            id={`dividerGradient-${color}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
          </linearGradient>

          <filter id="handDrawnDivider">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>

        {/* Wavy hills divider */}
        <path
          d="M 0 30 Q 100 10, 200 30 T 400 30 T 600 30 T 800 30 T 1000 30 T 1200 30 L 1200 100 L 0 100 Z"
          fill="url(#dividerGradient-divider)"
          filter="url(#handDrawnDivider)"
        />

        {/* Decorative clouds/bubbles */}
        <circle cx="150" cy="20" r="8" fill="white" opacity="0.6" />
        <circle cx="450" cy="15" r="10" fill="white" opacity="0.5" />
        <circle cx="750" cy="22" r="7" fill="white" opacity="0.6" />
        <circle cx="1050" cy="18" r="9" fill="white" opacity="0.5" />
      </svg>

      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl opacity-40 flex gap-4">
          <span>✨</span>
          <span>🎨</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  );
}
