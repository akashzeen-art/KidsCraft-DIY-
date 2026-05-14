import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { videos, categories, getCategoryByKey } from "@/data/videos";
import VideoCard from "./VideoCard";

export default function AllVideos() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? videos
      : videos.filter((v) => v.categoryKey === activeFilter);

  const filterButtons = [
    { key: "all", label: "🎨 All Crafts", count: videos.length },
    ...categories.map((c) => ({
      key: c.key,
      label: `${c.emoji} ${c.label}`,
      count: videos.filter((v) => v.categoryKey === c.key).length,
    })),
  ];

  return (
    <section
      id="all-videos"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-5xl inline-block mb-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            🎬
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-craft-purple mb-3">
            All Craft Videos
          </h2>
          <p className="text-lg text-craft-blue max-w-xl mx-auto font-semibold">
            Browse and filter by your favourite category!
          </p>
        </motion.div>

        {/* Filter buttons — horizontal scroll on mobile */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex gap-3 w-max mx-auto px-2">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.key;
              const cat = btn.key !== "all" ? getCategoryByKey(btn.key) : null;
              return (
                <motion.button
                  key={btn.key}
                  onClick={() => setActiveFilter(btn.key)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all border-2 ${
                    isActive
                      ? "bg-craft-purple text-white border-craft-purple shadow-lg"
                      : cat
                        ? `${cat.tagBg} ${cat.tagText} ${cat.borderColor} hover:shadow-md`
                        : "bg-white text-craft-purple border-craft-purple/30 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {btn.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {activeFilter !== "all" && (
          <div className="text-center mb-6">
            <button
              className="text-xs font-bold underline text-craft-blue"
              onClick={() => setActiveFilter("all")}
            >
              Clear filter ✕
            </button>
          </div>
        )}

        {/* Video grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((video, idx) => {
              const cat = getCategoryByKey(video.categoryKey);
              return (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  category={cat?.label ?? video.categoryKey}
                  emoji={video.emoji}
                  tryThisNext={video.tryThisNext}
                  categoryKey={video.categoryKey}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  index={idx}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
