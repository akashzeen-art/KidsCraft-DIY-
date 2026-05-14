import { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { videos, categories, getCategoryByKey } from "@/data/videos";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Videos() {
  const navigate = useNavigate();
  const shuffled = useMemo(() => shuffle(videos), []);

  const filterButtons = categories.map((c) => ({
    key: c.key,
    label: `${c.emoji} ${c.label}`,
    cat: c,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 to-pink-50">
      <Navbar />

      {/* Header banner */}
      <motion.div
        className="bg-gradient-to-r from-craft-purple via-pink-400 to-craft-blue text-white py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-4 text-5xl mb-4">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🎬
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            All DIY Craft Videos
          </h1>
          <p className="text-xl text-white/90 font-semibold">
            Pick a craft and start creating!
          </p>
        </div>
      </motion.div>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Category navigation pills */}
          <motion.div
            className="mb-8 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-3 w-max">
              {filterButtons.map((btn) => (
                <motion.button
                  key={btn.key}
                  onClick={() => navigate(`/?cat=${btn.key}#categories`)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap border-2 transition-all ${btn.cat.tagBg} ${btn.cat.tagText} ${btn.cat.borderColor} hover:shadow-md`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {btn.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Video grid — all videos */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {shuffled.map((video, idx) => {
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
