import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "sunny", label: "☀️ Sunny", bg: "#FFFDE7", ring: "#FDD835" },
  { id: "ocean", label: "🌊 Ocean", bg: "#E3F2FD", ring: "#29B6F6" },
  { id: "garden", label: "🌿 Garden", bg: "#E8F5E9", ring: "#66BB6A" },
  { id: "candy", label: "🍭 Candy", bg: "#FCE4EC", ring: "#EC407A" },
  { id: "lavender", label: "💜 Lavender", bg: "#F3E5F5", ring: "#AB47BC" },
];

interface ColorPickerProps {
  onThemeChange: (bg: string) => void;
  currentBg: string;
}

export default function ColorPicker({ onThemeChange, currentBg }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Palette popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 bg-white rounded-3xl shadow-2xl p-4 border-2 border-purple-200 w-52"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-black text-craft-purple mb-3 text-center uppercase tracking-wide">
              🎨 Pick a Theme!
            </p>
            <div className="flex flex-col gap-2">
              {themes.map((theme) => {
                const isActive = currentBg === theme.bg;
                return (
                  <motion.button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme.bg);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-2xl font-bold text-sm text-gray-700 hover:shadow-md transition-all"
                    style={{
                      backgroundColor: theme.bg,
                      border: isActive
                        ? `2px solid ${theme.ring}`
                        : "2px solid transparent",
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span
                      className="w-5 h-5 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: theme.ring }}
                    />
                    {theme.label}
                    {isActive && (
                      <span className="ml-auto text-green-500 font-black">✓</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="w-14 h-14 bg-gradient-to-br from-craft-purple to-pink-500 rounded-full shadow-xl flex items-center justify-center text-2xl border-4 border-white"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        title="Change background color"
      >
        🎨
      </motion.button>
    </div>
  );
}
