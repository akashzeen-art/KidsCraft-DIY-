import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  question: string;
  emoji: string;
  options: { label: string; hex?: string }[];
  correct: number;
  fact: string;
}

const questions: Question[] = [
  {
    question: "What color do you get when you mix RED and YELLOW?",
    emoji: "🔴 + 🟡",
    options: [
      { label: "Green",  hex: "#4CAF50" },
      { label: "Orange", hex: "#FF9800" },
      { label: "Purple", hex: "#9C27B0" },
      { label: "Brown",  hex: "#795548" },
    ],
    correct: 1,
    fact: "Red + Yellow = Orange 🍊 It's called a secondary color!",
  },
  {
    question: "What color do you get when you mix BLUE and YELLOW?",
    emoji: "🔵 + 🟡",
    options: [
      { label: "Pink",   hex: "#FF4081" },
      { label: "Teal",   hex: "#009688" },
      { label: "Green",  hex: "#4CAF50" },
      { label: "Orange", hex: "#FF9800" },
    ],
    correct: 2,
    fact: "Blue + Yellow = Green 💚 Plants are green because of a pigment!",
  },
  {
    question: "What color do you get when you mix RED and BLUE?",
    emoji: "🔴 + 🔵",
    options: [
      { label: "Purple", hex: "#9C27B0" },
      { label: "Brown",  hex: "#795548" },
      { label: "Gray",   hex: "#9E9E9E" },
      { label: "Black",  hex: "#212121" },
    ],
    correct: 0,
    fact: "Red + Blue = Purple 💜 Purple is the color of royalty!",
  },
  {
    question: "Which color is NOT a primary color?",
    emoji: "🎨",
    options: [
      { label: "Red",    hex: "#FF3B3B" },
      { label: "Green",  hex: "#4CAF50" },
      { label: "Blue",   hex: "#2196F3" },
      { label: "Yellow", hex: "#FFD600" },
    ],
    correct: 1,
    fact: "Green is made by mixing Blue + Yellow, so it's secondary, not primary!",
  },
  {
    question: "What do you get when you mix ALL primary colors (paint)?",
    emoji: "🔴 + 🔵 + 🟡",
    options: [
      { label: "White",  hex: "#FFFFFF" },
      { label: "Rainbow", hex: "linear-gradient(to right, red, yellow, green, blue, violet)" },
      { label: "Gray",   hex: "#9E9E9E" },
      { label: "Brown",  hex: "#795548" },
    ],
    correct: 3,
    fact: "Mixing all paint pigments together makes a muddy brown! Light works differently though 💡",
  },
];

export default function ColorQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const answer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const scoreEmoji =
    score === questions.length ? "🏆" : score >= 3 ? "⭐" : score >= 2 ? "😊" : "💪";

  return (
    <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-green-200 flex flex-col">
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={current}
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress */}
            <div className="flex items-center gap-1.5 mb-3">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    i < current ? "bg-craft-green" : i === current ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                />
              ))}
              <span className="text-xs font-bold text-gray-400 ml-1">{current + 1}/{questions.length}</span>
            </div>

            {/* Question */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-3 mb-3 text-center">
              <div className="text-2xl mb-1">{q.emoji}</div>
              <p className="font-black text-gray-800 text-sm leading-snug">{q.question}</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {q.options.map((opt, idx) => {
                const isCorrect = idx === q.correct;
                const isChosen = idx === selected;
                let btnClass = "border-2 border-gray-200 bg-gray-50 text-gray-700";
                if (selected !== null) {
                  if (isCorrect) btnClass = "border-2 border-green-500 bg-green-50 text-green-700";
                  else if (isChosen) btnClass = "border-2 border-red-400 bg-red-50 text-red-600";
                }
                return (
                  <motion.button
                    key={idx}
                    onClick={() => answer(idx)}
                    className={`rounded-2xl p-2.5 font-bold text-sm flex items-center gap-2 transition-all ${btnClass}`}
                    whileHover={selected === null ? { scale: 1.04 } : {}}
                    whileTap={selected === null ? { scale: 0.96 } : {}}
                    animate={selected !== null && isCorrect ? { scale: [1, 1.06, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    {opt.hex && !opt.hex.startsWith("linear") && (
                      <span className="w-4 h-4 rounded-full border border-gray-300 shrink-0" style={{ backgroundColor: opt.hex }} />
                    )}
                    {opt.label}
                    {selected !== null && isCorrect && <span className="ml-auto">✅</span>}
                    {selected !== null && isChosen && !isCorrect && <span className="ml-auto">❌</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* Fact reveal */}
            <AnimatePresence>
              {selected !== null && (
                <motion.div
                  className="bg-blue-50 border border-blue-200 rounded-2xl px-3 py-2 mb-3 text-xs text-blue-800 font-semibold"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0 }}
                >
                  💡 {q.fact}
                </motion.div>
              )}
            </AnimatePresence>

            {selected !== null && (
              <motion.button
                onClick={next}
                className="w-full py-2 bg-gradient-to-r from-craft-green to-craft-blue text-white font-black rounded-2xl text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {current + 1 >= questions.length ? "See My Score 🏆" : "Next Question →"}
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="done"
            className="flex flex-col items-center text-center py-4"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              className="text-6xl mb-2"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {scoreEmoji}
            </motion.div>
            <h4 className="text-2xl font-black text-craft-purple mb-1">{score}/{questions.length}</h4>
            <p className="text-gray-600 font-bold mb-2 text-sm">
              {score === questions.length ? "Perfect! You're a color genius!" : score >= 3 ? "Great job, color explorer!" : score >= 2 ? "Good try! Keep practicing!" : "Don't worry, you'll get it!"}
            </p>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: questions.length }).map((_, i) => (
                <span key={i} className={`text-lg ${i < score ? "opacity-100" : "opacity-20"}`}>⭐</span>
              ))}
            </div>
            <motion.button
              onClick={restart}
              className="px-7 py-2.5 bg-gradient-to-r from-craft-purple to-pink-500 text-white font-black rounded-full shadow-lg text-sm"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Play Again!
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
