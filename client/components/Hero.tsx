import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-16 pb-16 bg-gradient-to-b from-sky-200 to-sky-100">
      <HeroBackground />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {/* Stars row */}
        <motion.div
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {["⭐", "✨", "⭐"].map((star, i) => (
            <motion.span
              key={i}
              className={i === 1 ? "text-5xl" : "text-4xl"}
              animate={{
                rotate: i === 1 ? [0, 0, 0] : [0, i === 0 ? 360 : -360, 0],
                scale: i === 1 ? [1, 1.3, 1] : [1, 1.2, 1],
                y: [0, -10, 0],
              }}
              transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              {star}
            </motion.span>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-craft-purple mb-5 leading-tight drop-shadow-lg"
          style={{
            textShadow:
              "2px 2px 4px rgba(255,255,255,0.9), -2px -2px 4px rgba(255,255,255,0.6)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Make Fun<br />DIY Crafts!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-craft-blue font-bold mb-10 drop-shadow"
          style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.9)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create amazing things with simple materials and big imagination!
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToCategories}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-craft-purple text-white text-lg font-black rounded-full shadow-xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              🎨 Explore Crafts
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="/videos"
            className="px-8 py-4 bg-white/80 backdrop-blur text-craft-purple text-lg font-black rounded-full shadow-lg border-2 border-white"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">▶️ Watch Videos</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-14"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-sm font-bold text-craft-purple drop-shadow mb-1"
            style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }}
          >
            Scroll to explore
          </p>
          <div className="text-2xl">👇</div>
        </motion.div>
      </div>
    </section>
  );
}
