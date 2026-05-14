import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow bg-gradient-to-b from-yellow-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Hero section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="text-6xl mb-6 flex justify-center gap-4">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                🎨
              </motion.span>
              <motion.span
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                🧵
              </motion.span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black text-craft-purple mb-4">
              About CraftKids
            </h1>
            <p className="text-xl text-craft-blue font-semibold">
              Inspiring creativity in every child
            </p>
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left side - Our mission */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-craft-purple mb-4">
                🎯 Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CraftKids is dedicated to making DIY crafting fun, accessible, and
                educational for children of all ages. We believe that creativity
                knows no bounds and that every child can become an amazing artist!
              </p>
            </motion.div>

            {/* Right side - Why choose us */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-craft-purple mb-4">
                💡 Why Choose Us
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Easy-to-follow tutorials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Safe materials only</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>For all skill levels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Fun and engaging content</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "🎨", label: "Crafts" },
              { number: "100K+", label: "Happy Kids" },
              { number: "5⭐", label: "Rating" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-pink-200 to-craft-blue-200 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-black text-craft-purple">
                  {stat.number}
                </div>
                <div className="text-craft-purple font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center bg-gradient-to-r from-craft-purple to-pink rounded-3xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to explore more amazing crafts?
            </h2>
            <motion.button
              className="px-8 py-3 bg-white text-craft-purple font-bold rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Crafts →
            </motion.button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
