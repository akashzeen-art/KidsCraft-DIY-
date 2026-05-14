import { motion } from "framer-motion";
import { featuredVideos, getCategoryByKey } from "@/data/videos";
import VideoCard from "./VideoCard";

export default function FeaturedVideos() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
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
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ⭐
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-craft-purple mb-3">
            Featured Crafts
          </h2>
          <p className="text-lg text-craft-blue max-w-xl mx-auto font-semibold">
            One star pick from every category — a great place to start!
          </p>
        </motion.div>

        {/* Featured video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredVideos.map((video, idx) => {
            const cat = getCategoryByKey(video.categoryKey);
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Featured badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <motion.div
                    className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-full shadow-md"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐ Featured
                  </motion.div>
                </div>

                <VideoCard
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
