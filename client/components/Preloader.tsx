import { useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onLoadComplete: () => void;
}

export default function Preloader({ onLoadComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated shapes background */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-craft-purple rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-craft-green rounded-3xl opacity-25"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Animated stars */}
        <div className="flex justify-center mb-6">
          <motion.img
            src="/logo/kidsd_craftlogo.png"
            alt="KidsCraft"
            className="h-24 w-auto"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Title with bounce animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-black text-craft-purple mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading Fun Crafts...
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-craft-purple font-bold mb-8"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Get Ready to Create!
        </motion.p>

        {/* Bouncing dots loader */}
        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-gradient-to-br from-pink-500 to-craft-purple rounded-full"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          ))}
        </div>

        {/* Animated craft icons */}
        <div className="flex justify-center gap-6 text-4xl">
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎨
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            🧵
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            ✂️
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
