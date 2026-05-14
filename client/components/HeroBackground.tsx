import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* SVG Background Scene */}
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))" }}
      >
        {/* Sky gradient background */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#87CEEB", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#E0F6FF", stopOpacity: 1 }} />
          </linearGradient>

          <filter id="handDrawn">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="1200" height="800" fill="url(#skyGradient)" />

        {/* Clouds - decorative */}
        <g opacity="0.7">
          <ellipse cx="150" cy="100" rx="60" ry="40" fill="white" filter="url(#handDrawn)" />
          <ellipse cx="200" cy="110" rx="70" ry="45" fill="white" filter="url(#handDrawn)" />
          <ellipse cx="100" cy="120" rx="55" ry="35" fill="white" filter="url(#handDrawn)" />

          <ellipse cx="900" cy="140" rx="80" ry="50" fill="white" filter="url(#handDrawn)" />
          <ellipse cx="980" cy="155" rx="75" ry="45" fill="white" filter="url(#handDrawn)" />
          <ellipse cx="820" cy="160" rx="70" ry="40" fill="white" filter="url(#handDrawn)" />
        </g>

        {/* Sun */}
        <g>
          <circle cx="1050" cy="120" r="70" fill="#FFD700" filter="url(#handDrawn)" />
          {/* Sun rays */}
          <line x1="1050" y1="30" x2="1050" y2="10" stroke="#FFD700" strokeWidth="8" />
          <line x1="1050" y1="210" x2="1050" y2="230" stroke="#FFD700" strokeWidth="8" />
          <line x1="1160" y1="120" x2="1180" y2="120" stroke="#FFD700" strokeWidth="8" />
          <line x1="940" y1="120" x2="920" y2="120" stroke="#FFD700" strokeWidth="8" />
        </g>

        {/* Far hill background (light green) */}
        <path
          d="M 0 450 Q 150 350, 300 450 T 600 450 T 900 450 T 1200 450 L 1200 800 L 0 800 Z"
          fill="#90EE90"
          opacity="0.6"
          filter="url(#handDrawn)"
        />

        {/* Middle hill (medium green) */}
        <path
          d="M 0 500 Q 120 380, 240 500 Q 360 620, 480 500 Q 600 380, 720 500 Q 840 620, 960 500 Q 1080 380, 1200 500 L 1200 800 L 0 800 Z"
          fill="#7FD97F"
          filter="url(#handDrawn)"
        />

        {/* Main hill (darker green) */}
        <path
          d="M 0 550 Q 150 400, 300 550 Q 450 700, 600 550 Q 750 400, 900 550 Q 1050 700, 1200 550 L 1200 800 L 0 800 Z"
          fill="#66BB6A"
          filter="url(#handDrawn)"
        />

        {/* Road/Path - wavy */}
        <path
          d="M 0 600 Q 150 580, 300 600 Q 450 620, 600 600 Q 750 580, 900 600 Q 1050 620, 1200 600 L 1200 650 Q 1050 640, 900 650 Q 750 660, 600 650 Q 450 640, 300 650 Q 150 660, 0 650 Z"
          fill="#D4A574"
          filter="url(#handDrawn)"
        />

        {/* Road center line */}
        <path
          d="M 0 625 Q 150 620, 300 625 Q 450 630, 600 625 Q 750 620, 900 625 Q 1050 630, 1200 625"
          stroke="#FFE4B5"
          strokeWidth="4"
          fill="none"
          strokeDasharray="40,40"
          filter="url(#handDrawn)"
        />

        {/* Small trees/bushes scattered on hills */}
        <g opacity="0.8">
          {/* Tree 1 */}
          <circle cx="200" cy="480" r="25" fill="#4CAF50" filter="url(#handDrawn)" />
          <rect x="190" y="500" width="20" height="40" fill="#8B4513" />

          {/* Tree 2 */}
          <circle cx="950" cy="520" r="30" fill="#4CAF50" filter="url(#handDrawn)" />
          <rect x="935" y="545" width="30" height="50" fill="#8B4513" />

          {/* Bush 1 */}
          <circle cx="450" cy="510" r="20" fill="#558B2F" filter="url(#handDrawn)" />

          {/* Bush 2 */}
          <circle cx="1100" cy="480" r="18" fill="#558B2F" filter="url(#handDrawn)" />
        </g>

        {/* Flowers/decorative elements */}
        <g>
          {/* Flower group 1 */}
          <circle cx="300" cy="535" r="4" fill="#FF69B4" />
          <circle cx="310" cy="545" r="3" fill="#FFB6C1" />
          <circle cx="290" cy="548" r="3" fill="#FFB6C1" />

          {/* Flower group 2 */}
          <circle cx="850" cy="565" r="4" fill="#FFD700" />
          <circle cx="860" cy="575" r="3" fill="#FFED4E" />
          <circle cx="840" cy="578" r="3" fill="#FFED4E" />
        </g>
      </svg>

      {/* Animated car moving along the road */}
      <motion.div
        className="absolute"
        style={{
          left: "0%",
          top: "73%",
          width: "80px",
          height: "40px",
        }}
        animate={{
          left: ["0%", "95%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full">
          {/* Car body */}
          <svg viewBox="0 0 80 40" className="w-full h-full">
            <rect x="10" y="15" width="60" height="15" rx="5" fill="#FF6B6B" />
            {/* Car window */}
            <rect x="25" y="12" width="30" height="8" rx="2" fill="#87CEEB" />
            {/* Wheels */}
            <circle cx="25" cy="32" r="5" fill="#333" />
            <circle cx="55" cy="32" r="5" fill="#333" />
          </svg>
        </div>
      </motion.div>

      {/* Animated airplane flying across sky */}
      <motion.div
        className="absolute"
        style={{
          left: "-10%",
          top: "20%",
          fontSize: "3rem",
          zIndex: 10,
        }}
        animate={{
          left: ["0%", "110%"],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ✈️
      </motion.div>

      {/* Animated bird */}
      <motion.div
        className="absolute text-3xl"
        style={{
          right: "-10%",
          top: "15%",
        }}
        animate={{
          right: ["0%", "110%"],
          y: [0, -15, 5, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🦅
      </motion.div>
    </div>
  );
}
