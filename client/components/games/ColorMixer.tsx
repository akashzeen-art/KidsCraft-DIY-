import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const palette = [
  { name: "Red", hex: "#FF3B3B" },
  { name: "Yellow", hex: "#FFD600" },
  { name: "Blue", hex: "#2196F3" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Orange", hex: "#FF9800" },
  { name: "Green", hex: "#4CAF50" },
  { name: "Purple", hex: "#9C27B0" },
  { name: "Pink", hex: "#FF4081" },
];

type ColorEntry = { name: string; hex: string };

const mixMap: Record<string, { result: ColorEntry; message: string }> = {
  "Red+Yellow": { result: { name: "Orange", hex: "#FF9800" }, message: "Red + Yellow = Orange! 🍊" },
  "Yellow+Red": { result: { name: "Orange", hex: "#FF9800" }, message: "Red + Yellow = Orange! 🍊" },
  "Red+Blue": { result: { name: "Purple", hex: "#9C27B0" }, message: "Red + Blue = Purple! 💜" },
  "Blue+Red": { result: { name: "Purple", hex: "#9C27B0" }, message: "Red + Blue = Purple! 💜" },
  "Blue+Yellow": { result: { name: "Green", hex: "#4CAF50" }, message: "Blue + Yellow = Green! 💚" },
  "Yellow+Blue": { result: { name: "Green", hex: "#4CAF50" }, message: "Blue + Yellow = Green! 💚" },
  "Red+White": { result: { name: "Pink", hex: "#FF80AB" }, message: "Red + White = Pink! 🩷" },
  "White+Red": { result: { name: "Pink", hex: "#FF80AB" }, message: "Red + White = Pink! 🩷" },
  "Red+Orange": { result: { name: "Red-Orange", hex: "#FF5722" }, message: "Red + Orange = Red-Orange! 🌶️" },
  "Orange+Red": { result: { name: "Red-Orange", hex: "#FF5722" }, message: "Red + Orange = Red-Orange! 🌶️" },
  "Blue+Green": { result: { name: "Teal", hex: "#009688" }, message: "Blue + Green = Teal! 🩵" },
  "Green+Blue": { result: { name: "Teal", hex: "#009688" }, message: "Blue + Green = Teal! 🩵" },
  "Yellow+Green": { result: { name: "Lime", hex: "#CDDC39" }, message: "Yellow + Green = Lime! 🍋" },
  "Green+Yellow": { result: { name: "Lime", hex: "#CDDC39" }, message: "Yellow + Green = Lime! 🍋" },
  "Red+Green": { result: { name: "Brown", hex: "#795548" }, message: "Red + Green = Brown! 🟫" },
  "Green+Red": { result: { name: "Brown", hex: "#795548" }, message: "Red + Green = Brown! 🟫" },
  "Pink+Purple": { result: { name: "Magenta", hex: "#E91E63" }, message: "Pink + Purple = Magenta! 💗" },
  "Purple+Pink": { result: { name: "Magenta", hex: "#E91E63" }, message: "Pink + Purple = Magenta! 💗" },
  "Orange+Yellow": { result: { name: "Gold", hex: "#FFC107" }, message: "Orange + Yellow = Gold! ✨" },
  "Yellow+Orange": { result: { name: "Gold", hex: "#FFC107" }, message: "Orange + Yellow = Gold! ✨" },
};

export default function ColorMixer() {
  const [color1, setColor1] = useState<ColorEntry | null>(null);
  const [color2, setColor2] = useState<ColorEntry | null>(null);
  const [mixed, setMixed] = useState<{ result: ColorEntry; message: string } | null>(null);
  const [splashKey, setSplashKey] = useState(0);

  const selectColor = (color: ColorEntry) => {
    if (!color1) {
      setColor1(color);
    } else if (!color2) {
      const key = `${color1.name}+${color.name}`;
      const result = mixMap[key] ?? {
        result: { name: "Mystery Color", hex: blendHex(color1.hex, color.hex) },
        message: `${color1.name} + ${color.name} = Mystery Color! 🎨`,
      };
      setColor2(color);
      setMixed(result);
      setSplashKey((k) => k + 1);
    }
  };

  const reset = () => {
    setColor1(null);
    setColor2(null);
    setMixed(null);
  };

  return (
    <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-pink-200 flex flex-col">
      <div className="text-center mb-3">
        <p className="text-sm text-gray-500 font-semibold">
          {!color1 ? "Pick your FIRST color!" : !color2 ? "Now pick a SECOND color!" : "Ta-da! See what you made!"}
        </p>
      </div>

      {/* Color palette */}
      <div className="grid grid-cols-8 gap-1.5 mb-3">
        {palette.map((color) => {
          const isSelected = color1?.name === color.name || color2?.name === color.name;
          const disabled = !!mixed;
          return (
            <motion.button
              key={color.name}
              onClick={() => !disabled && selectColor(color)}
              className={`aspect-square rounded-xl border-4 transition-all ${
                isSelected ? "border-gray-800 scale-110" : "border-white"
              } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
              style={{ backgroundColor: color.hex, boxShadow: "0 2px 6px rgba(0,0,0,0.12)" }}
              whileHover={!disabled ? { scale: 1.12 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              title={color.name}
            />
          );
        })}
      </div>

      {/* Mixing zone */}
      <div className="flex items-center justify-center gap-3 mb-3">
        {/* Color 1 slot */}
        <motion.div
          className="w-12 h-12 rounded-xl border-4 border-dashed flex items-center justify-center"
          style={{
            backgroundColor: color1 ? color1.hex : "transparent",
            borderColor: color1 ? color1.hex : "#D1D5DB",
          }}
          animate={color1 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          {!color1 && <span className="text-gray-300 text-xl">?</span>}
        </motion.div>

        <span className="text-2xl font-black text-gray-400">+</span>

        {/* Color 2 slot */}
        <motion.div
          className="w-12 h-12 rounded-xl border-4 border-dashed flex items-center justify-center"
          style={{
            backgroundColor: color2 ? color2.hex : "transparent",
            borderColor: color2 ? color2.hex : "#D1D5DB",
          }}
          animate={color2 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          {!color2 && <span className="text-gray-300 text-xl">?</span>}
        </motion.div>

        <span className="text-2xl font-black text-gray-400">=</span>

        {/* Result */}
        <AnimatePresence>
          {mixed ? (
            <motion.div
              key={splashKey}
              className="w-12 h-12 rounded-xl border-4 border-white shadow-lg"
              style={{ backgroundColor: mixed.result.hex }}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
            />
          ) : (
            <div className="w-12 h-12 rounded-xl border-4 border-dashed border-gray-200 flex items-center justify-center">
              <span className="text-gray-200 text-xl">✨</span>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Result message */}
      <AnimatePresence>
        {mixed && (
          <motion.div
            key={splashKey + "msg"}
            className="text-center mb-3 bg-yellow-50 rounded-2xl py-1.5 px-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-black text-base text-gray-700">{mixed.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset */}
      {mixed && (
        <motion.button
          onClick={reset}
          className="w-full py-2.5 bg-gradient-to-r from-craft-purple to-pink-500 text-white font-black rounded-2xl text-sm"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🔄 Mix Again!
        </motion.button>
      )}
    </div>
  );
}

function blendHex(hex1: string, hex2: string): string {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  const r = Math.round((r1 + r2) / 2).toString(16).padStart(2, "0");
  const g = Math.round((g1 + g2) / 2).toString(16).padStart(2, "0");
  const b = Math.round((b1 + b2) / 2).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}
