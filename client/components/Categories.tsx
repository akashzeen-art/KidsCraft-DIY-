import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { categories, getVideosByCategory } from "@/data/videos";
import VideoCard from "./VideoCard";

export default function Categories() {
  const [searchParams] = useSearchParams();
  const [expandedKey, setExpandedKey] = useState<string | null>(() => searchParams.get("cat"));

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setExpandedKey(cat);
      setTimeout(() => {
        document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  return (
    <section
      id="categories"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-5xl inline-block mb-3"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🗂️
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-craft-purple mb-3">
            Browse by Category
          </h2>
          <p className="text-lg text-craft-blue max-w-xl mx-auto font-semibold">
            Pick your favourite type of craft and start making!
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="space-y-6">
          {categories.map((cat, idx) => {
            const catVideos = getVideosByCategory(cat.key);
            const isOpen = expandedKey === cat.key;

            return (
              <motion.div
                key={cat.key}
                className={`rounded-3xl overflow-hidden border-2 ${cat.borderColor} shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Category header — clickable */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${cat.headerBg} px-6 py-5 flex items-center justify-between group`}
                  onClick={() =>
                    setExpandedKey(isOpen ? null : cat.key)
                  }
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="text-4xl"
                      animate={isOpen ? { rotate: [0, 20, -20, 0] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {cat.emoji}
                    </motion.span>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-black text-gray-800">
                        {cat.label}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span
                      className={`${cat.tagBg} ${cat.tagText} text-sm font-bold px-3 py-1 rounded-full`}
                    >
                      Watch Videos
                    </span>
                    <motion.span
                      className="text-2xl text-gray-600"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ⌄
                    </motion.span>
                  </div>
                </motion.button>

                {/* Expanded videos grid */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`${cat.pastelBg} px-6 py-8`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {catVideos.map((video, vIdx) => (
                            <VideoCard
                              key={video.id}
                              id={video.id}
                              title={video.title}
                              category={cat.label}
                              emoji={video.emoji}
                              tryThisNext={video.tryThisNext}
                              categoryKey={cat.key}
                              thumbnail={video.thumbnail}
                              videoUrl={video.videoUrl}
                              index={vIdx}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
