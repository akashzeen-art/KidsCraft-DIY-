import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorMixer from "@/components/games/ColorMixer";
import PaintTheCraft from "@/components/games/PaintTheCraft";
import ColorQuiz from "@/components/games/ColorQuiz";

const tabs = [
  {
    id: "mixer",
    label: "Color Mixer",
    emoji: "🎨",
    description: "Mix two colors and discover what you get!",
    bg: "from-pink-400 to-orange-300",
  },
  {
    id: "paint",
    label: "Paint the Craft",
    emoji: "🖌️",
    description: "Color a butterfly craft with your own palette!",
    bg: "from-blue-400 to-cyan-300",
  },
  {
    id: "quiz",
    label: "Color Quiz",
    emoji: "🧠",
    description: "Test how well you know your colors!",
    bg: "from-green-400 to-emerald-300",
  },
];

export default function Games() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") ?? "mixer";
  const [activeTab, setActiveTab] = useState(
    tabs.some((t) => t.id === initialTab) ? initialTab : "mixer"
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 to-purple-50">
      <Navbar />

      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-craft-purple via-pink-400 to-craft-blue text-white py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3">
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🕹️
            </motion.span>
            <h1 className="text-3xl font-black">Fun Games!</h1>
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </div>
        </div>
      </motion.div>

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          {/* Game tab pills */}
          <div className="flex justify-center gap-2 mb-5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-sm border-2 transition-all ${
                    isActive
                      ? "bg-craft-purple text-white border-craft-purple shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{tab.emoji}</span>
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Game panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {activeTab === "mixer" && <ColorMixer />}
              {activeTab === "paint" && <PaintTheCraft />}
              {activeTab === "quiz"  && <ColorQuiz />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
