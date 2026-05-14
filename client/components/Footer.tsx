import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-r from-craft-purple via-pink-500 to-craft-blue text-white py-5 border-t-4 border-white/30"
      style={{
        boxShadow: "inset 0 2px 0 rgba(255,255,255,0.2), 0 -5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-3">
          {/* Logo section */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/">
              <motion.div
                className="flex items-center gap-2 mb-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/logo/kidsd_craftlogo.png" alt="KidsCraft" className="h-10 w-auto" />
              </motion.div>
            </Link>
            <p className="text-sm text-white/80">
              Making DIY crafts fun for kids everywhere!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-white/20 rounded-full mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-sm">
            © {currentYear} KidsCraft. All rights reserved. Made with ❤️ for
            creative kids everywhere!
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
