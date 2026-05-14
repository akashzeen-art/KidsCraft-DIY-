import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCardProps {
  id: number;
  title: string;
  category?: string;
  categoryKey?: string;
  emoji?: string;
  tryThisNext?: string;
  index?: number;
  thumbnail?: string;
  videoUrl?: string;
}

const categoryGradients: Record<string, string> = {
  paper: "from-yellow-200 to-amber-100",
  animals: "from-orange-200 to-amber-100",
  creative: "from-green-200 to-emerald-100",
  fun: "from-blue-200 to-sky-100",
  seasonal: "from-pink-200 to-rose-100",
};

const fallbackGradients = [
  "from-pink-200 to-yellow-200",
  "from-blue-200 to-green-200",
  "from-purple-200 to-pink-200",
  "from-yellow-200 to-blue-200",
];

export default function VideoCard({
  id,
  title,
  category = "Craft",
  categoryKey,
  emoji = "🎨",
  tryThisNext,
  index = 0,
  thumbnail,
  videoUrl,
}: VideoCardProps) {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      setTimeout(() => videoRef.current?.play(), 100);
    } else {
      document.body.style.overflow = "";
      videoRef.current?.pause();
    }
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  const openVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoUrl) setShowModal(true);
  };

  const bgGradient =
    (categoryKey && categoryGradients[categoryKey]) ||
    fallbackGradients[id % fallbackGradients.length];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const sparkleId = Date.now();
    setSparkles((prev) => [...prev, { id: sparkleId, x, y }]);
    setTimeout(
      () => setSparkles((prev) => prev.filter((s) => s.id !== sparkleId)),
      700
    );
  };

  return (
    <>
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (index % 6) * 0.08,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="relative flex flex-col h-full bg-white rounded-3xl overflow-hidden cursor-pointer border-2 border-white/80 group"
        style={{
          boxShadow:
            "0 6px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
        whileHover={{
          y: -10,
          boxShadow:
            "0 18px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
      >
        {/* Sparkle particles on click */}
        <AnimatePresence>
          {sparkles.map((s) => (
            <motion.div
              key={s.id}
              className="absolute pointer-events-none z-30 text-xl"
              style={{ left: s.x - 12, top: s.y - 12 }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.8, opacity: 0, y: -30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              ✨
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Thumbnail */}
        <div
          className={`relative w-full h-44 bg-gradient-to-br ${bgGradient} overflow-hidden`}
        >
          {thumbnail && !imgError ? (
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              onError={() => setImgError(true)}
              onClick={openVideo}
            />
          ) : (
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-7xl select-none"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ duration: 0.3 }}
            >
              {emoji}
            </motion.div>
          )}

          {/* Hover overlay with play button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <motion.button
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={openVideo}
            >
              <span className="text-xl ml-1">▶️</span>
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Category tag */}
          <div className="mb-2">
            <span className="inline-block px-2.5 py-0.5 bg-craft-purple/10 rounded-full text-xs font-bold text-craft-purple">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-black text-gray-800 mb-3 line-clamp-2 flex-1 leading-snug">
            {title}
          </h3>

          {/* Try This Next */}
          {tryThisNext && (
            <motion.div
              className="mb-3 bg-yellow-50 border border-yellow-200 rounded-2xl px-3 py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-yellow-700">
                👉 Try This Next:
              </p>
              <p className="text-xs text-yellow-800 line-clamp-1 mt-0.5">
                {tryThisNext}
              </p>
            </motion.div>
          )}

          {/* Watch button */}
          <motion.button
            className="w-full py-2 bg-gradient-to-r from-craft-purple to-pink-500 rounded-2xl text-white font-bold text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={openVideo}
          >
            🎬 Watch Now
          </motion.button>
        </div>
      </motion.div>
    </motion.div>

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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal box */}
          <motion.div
            className="relative z-10 w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white font-black text-lg transition-colors"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Title bar */}
            <div className="px-5 pt-4 pb-2">
              <p className="text-white font-black text-base line-clamp-1">{title}</p>
            </div>

            {/* Video */}
            <div className="aspect-video w-full">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                autoPlay
                controlsList="nodownload"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
