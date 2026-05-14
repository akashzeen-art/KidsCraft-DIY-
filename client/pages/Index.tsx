import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedVideos from "@/components/FeaturedVideos";
import AllVideos from "@/components/AllVideos";
import CraftOfTheDay from "@/components/CraftOfTheDay";
import ColorPicker from "@/components/ColorPicker";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Index() {
  const [showContent, setShowContent] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFDE7"); // default: sunny yellow

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      {/* Preloader */}
      <AnimatePresence>
        {!showContent && (
          <Preloader onLoadComplete={() => setShowContent(true)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />

          {/* 1. Hero */}
          <Hero />

          <SectionDivider />

          {/* 2. Craft of the Day */}
          <CraftOfTheDay />

          <SectionDivider flipped />

          {/* 3. Video Categories */}
          <Categories />

          <SectionDivider />

          {/* 4. Featured Videos */}
          <FeaturedVideos />

          <SectionDivider flipped />

          {/* 6. All Videos with filter */}
          <AllVideos />

          {/* 6. CTA banner */}
          <section className="py-16 bg-gradient-to-r from-craft-purple via-pink-400 to-craft-blue">
            <motion.div
              className="max-w-3xl mx-auto text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center gap-4 text-5xl mb-5">
                {["🎨", "✨", "🧵"].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-white/90 text-lg font-semibold mb-7">
                Join thousands of creative kids making fun crafts every day!
              </p>
              <motion.a
                href="/games"
                className="inline-block px-10 py-4 bg-white text-craft-purple font-black text-lg rounded-full shadow-xl"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Start Crafting Now!
              </motion.a>
            </motion.div>
          </section>

          <Footer />

          {/* Floating color picker */}
          <ColorPicker onThemeChange={setBgColor} currentBg={bgColor} />
        </motion.div>
      )}
    </div>
  );
}
