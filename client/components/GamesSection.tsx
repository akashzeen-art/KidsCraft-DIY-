import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorMixer from "./games/ColorMixer";
import PaintTheCraft from "./games/PaintTheCraft";
import ColorQuiz from "./games/ColorQuiz";

const tabs = [
  { id: "mixer", label: "🎨 Color Mixer",   emoji: "🎨", bg: "from-pink-400 to-orange-300"   },
  { id: "paint", label: "🖌️ Paint the Craft", emoji: "🖌️", bg: "from-blue-400 to-cyan-300"    },
  { id: "quiz",  label: "🧠 Color Quiz",     emoji: "🧠", bg: "from-green-400 to-emerald-300" },
];

export default function GamesSection() {
  const [activeTab, setActiveTab] = useState("mixer");

  return (
    <section
      id="games"
      className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-5xl inline-block mb-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            🕹️
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-craft-purple mb-3">
            Fun Games!
          </h2>
          <p className="text-lg text-craft-blue max-w-xl mx-auto font-semibold">
            Play and learn about colors and crafts — just for you!
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-black text-base transition-all border-2 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.bg} text-white border-transparent shadow-lg`
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Game panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="max-w-xl mx-auto"
          >
            {activeTab === "mixer" && <ColorMixer />}
            {activeTab === "paint" && <PaintTheCraft />}
            {activeTab === "quiz"  && <ColorQuiz />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
