import { useState } from "react";
import { motion } from "framer-motion";

const palette = [
  "#FF3B3B", "#FF9800", "#FFD600",
  "#4CAF50", "#2196F3", "#9C27B0",
  "#FF4081", "#795548", "#FFFFFF",
  "#212121",
];

// SVG parts of a simple butterfly craft
type Part = { id: string; label: string; defaultFill: string };

const parts: Part[] = [
  { id: "body",    label: "Body",           defaultFill: "#BDBDBD" },
  { id: "wing-tl", label: "Top Left Wing",  defaultFill: "#E0E0E0" },
  { id: "wing-tr", label: "Top Right Wing", defaultFill: "#E0E0E0" },
  { id: "wing-bl", label: "Bottom Left",    defaultFill: "#EEEEEE" },
  { id: "wing-br", label: "Bottom Right",   defaultFill: "#EEEEEE" },
  { id: "dot1",    label: "Dot 1",          defaultFill: "#F5F5F5" },
  { id: "dot2",    label: "Dot 2",          defaultFill: "#F5F5F5" },
  { id: "dot3",    label: "Dot 3",          defaultFill: "#F5F5F5" },
  { id: "dot4",    label: "Dot 4",          defaultFill: "#F5F5F5" },
];

export default function PaintTheCraft() {
  const [fills, setFills] = useState<Record<string, string>>(
    Object.fromEntries(parts.map((p) => [p.id, p.defaultFill]))
  );
  const [selected, setSelected] = useState("#FF3B3B");
  const [lastPainted, setLastPainted] = useState<string | null>(null);

  const paint = (id: string) => {
    setFills((prev) => ({ ...prev, [id]: selected }));
    setLastPainted(id);
  };

  const reset = () => {
    setFills(Object.fromEntries(parts.map((p) => [p.id, p.defaultFill])));
    setLastPainted(null);
  };

  return (
    <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-blue-200 flex flex-col">
      <div className="text-center mb-2">
        <p className="text-sm text-gray-500 font-semibold">
          Pick a color then click a part of the butterfly!
        </p>
      </div>

      {/* SVG Butterfly */}
      <div className="flex items-center justify-center mb-3">
        <motion.svg
          viewBox="0 0 220 200"
          className="w-full max-w-[180px]"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }}
        >
          {/* Top-left wing */}
          <motion.path
            id="wing-tl"
            d="M 110 100 C 80 70, 30 40, 20 80 C 10 115, 60 130, 110 110 Z"
            fill={fills["wing-tl"]}
            stroke="#9E9E9E"
            strokeWidth="1.5"
            onClick={() => paint("wing-tl")}
            className="cursor-pointer"
            whileHover={{ scale: 1.04 }}
            style={{ transformOrigin: "110px 100px" }}
            animate={lastPainted === "wing-tl" ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Top-right wing */}
          <motion.path
            id="wing-tr"
            d="M 110 100 C 140 70, 190 40, 200 80 C 210 115, 160 130, 110 110 Z"
            fill={fills["wing-tr"]}
            stroke="#9E9E9E"
            strokeWidth="1.5"
            onClick={() => paint("wing-tr")}
            className="cursor-pointer"
            whileHover={{ scale: 1.04 }}
            style={{ transformOrigin: "110px 100px" }}
            animate={lastPainted === "wing-tr" ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom-left wing */}
          <motion.path
            id="wing-bl"
            d="M 110 110 C 75 115, 35 140, 45 165 C 55 190, 95 180, 110 150 Z"
            fill={fills["wing-bl"]}
            stroke="#9E9E9E"
            strokeWidth="1.5"
            onClick={() => paint("wing-bl")}
            className="cursor-pointer"
            whileHover={{ scale: 1.04 }}
            style={{ transformOrigin: "110px 110px" }}
            animate={lastPainted === "wing-bl" ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom-right wing */}
          <motion.path
            id="wing-br"
            d="M 110 110 C 145 115, 185 140, 175 165 C 165 190, 125 180, 110 150 Z"
            fill={fills["wing-br"]}
            stroke="#9E9E9E"
            strokeWidth="1.5"
            onClick={() => paint("wing-br")}
            className="cursor-pointer"
            whileHover={{ scale: 1.04 }}
            style={{ transformOrigin: "110px 110px" }}
            animate={lastPainted === "wing-br" ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Decorative dots on wings */}
          {[
            { id: "dot1", cx: 65,  cy: 80  },
            { id: "dot2", cx: 155, cy: 80  },
            { id: "dot3", cx: 68,  cy: 140 },
            { id: "dot4", cx: 152, cy: 140 },
          ].map((dot) => (
            <motion.circle
              key={dot.id}
              cx={dot.cx}
              cy={dot.cy}
              r="10"
              fill={fills[dot.id]}
              stroke="#9E9E9E"
              strokeWidth="1.5"
              onClick={() => paint(dot.id)}
              className="cursor-pointer"
              whileHover={{ scale: 1.3 }}
              animate={lastPainted === dot.id ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 0.3 }}
            />
          ))}
          {/* Body */}
          <motion.ellipse
            cx="110"
            cy="115"
            rx="7"
            ry="30"
            fill={fills["body"]}
            stroke="#757575"
            strokeWidth="1.5"
            onClick={() => paint("body")}
            className="cursor-pointer"
            whileHover={{ scale: 1.15 }}
            animate={lastPainted === "body" ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Antennae */}
          <line x1="107" y1="86" x2="90"  y2="65" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="113" y1="86" x2="130" y2="65" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="89"  cy="63" r="3" fill="#757575" />
          <circle cx="131" cy="63" r="3" fill="#757575" />
        </motion.svg>
      </div>

      {/* Color palette + active indicator in one row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="grid grid-cols-5 gap-1.5 flex-1">
          {palette.map((hex) => (
            <motion.button
              key={hex}
              onClick={() => setSelected(hex)}
              className="aspect-square rounded-lg border-4 transition-all"
              style={{
                backgroundColor: hex,
                borderColor: selected === hex ? "#374151" : "transparent",
                boxShadow: selected === hex ? "0 0 0 2px #374151" : "0 2px 6px rgba(0,0,0,0.12)",
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        <span
          className="w-8 h-8 rounded-full border-2 border-gray-300 shrink-0"
          style={{ backgroundColor: selected }}
          title="Active color"
        />
      </div>

      <motion.button
        onClick={reset}
        className="w-full py-2 bg-gradient-to-r from-craft-blue to-craft-purple text-white font-black rounded-2xl text-sm"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        🗑️ Clear & Start Over
      </motion.button>
    </div>
  );
}
