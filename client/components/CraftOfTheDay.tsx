import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { craftOfTheDay, getCategoryByKey } from "@/data/videos";

export default function CraftOfTheDay() {
  const video = craftOfTheDay;
  const cat = getCategoryByKey(video.categoryKey);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-200 rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-yellow-400 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Sparkle decorations */}
          {["top-3 left-4", "top-3 right-6", "bottom-4 left-8", "bottom-3 right-4"].map(
            (pos, i) => (
              <motion.span
                key={i}
                className={`absolute text-2xl ${pos}`}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5 + i * 0.3, repeat: Infinity }}
              >
                ✨
              </motion.span>
            )
          )}

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            {/* Thumbnail or emoji */}
            <motion.div
              className="w-40 h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-yellow-100">
                  {video.emoji}
                </div>
              )}
            </motion.div>

            <div className="text-center sm:text-left flex-1">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-500 text-white text-sm font-black px-4 py-1.5 rounded-full mb-3 shadow-md"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>⭐</span> Craft of the Day
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2 leading-tight">
                {video.title}
              </h3>

              {cat && (
                <span
                  className={`inline-block text-sm font-bold ${cat.tagBg} ${cat.tagText} px-3 py-1 rounded-full mb-4`}
                >
                  {cat.emoji} {cat.label}
                </span>
              )}

              <p className="text-gray-700 font-semibold mb-5 text-sm">
                Today's special pick! Perfect for a fun afternoon of crafting.
              </p>

              <motion.button
                className="px-7 py-3 bg-craft-purple text-white font-black rounded-full shadow-lg text-base"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                🎬 Watch Now!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white font-black text-lg transition-colors"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
              <div className="px-5 pt-4 pb-2">
                <p className="text-white font-black text-base line-clamp-1">{video.title}</p>
              </div>
              <div className="aspect-video w-full">
                <video src={video.videoUrl} controls autoPlay className="w-full h-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
