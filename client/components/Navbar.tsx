import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  { id: "mixer", label: "Color Mixer", emoji: "🎨", desc: "Mix colors together!" },
  { id: "paint", label: "Paint the Craft", emoji: "🖌️", desc: "Color a butterfly!" },
  { id: "quiz",  label: "Color Quiz",  emoji: "🧠", desc: "Test your color knowledge!" },
];

const navItems = [
  { label: "Home",       path: "/" },
  { label: "Categories", path: "/#categories" },
  { label: "Videos",     path: "/videos" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path.split("#")[0]) && path !== "/";

  const isGamesActive = location.pathname.startsWith("/games");

  const handleCategoriesClick = (e: React.MouseEvent, path: string) => {
    if (path === "/#categories") {
      e.preventDefault();
      if (location.pathname !== "/") {
        window.location.href = "/#categories";
      } else {
        document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  const goToGame = (id: string) => {
    setGamesOpen(false);
    setMenuOpen(false);
    navigate(`/games?tab=${id}`);
  };

  return (
    <motion.nav
      className="sticky top-0 z-40 bg-gradient-to-r from-craft-purple via-pink-400 to-craft-blue shadow-lg border-b-4 border-white/30"
      style={{ borderRadius: "0 0 2rem 2rem" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo/kidsd_craftlogo.png" alt="KidsCraft" className="h-10 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleCategoriesClick(e, item.path)}
              >
                <motion.div
                  className={`relative px-4 py-2 rounded-full font-bold text-sm lg:text-base transition-colors ${
                    isActive(item.path)
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-300 rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}

            {/* Games dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setGamesOpen((v) => !v)}
                className={`relative px-4 py-2 rounded-full font-bold text-sm lg:text-base flex items-center gap-1.5 transition-colors ${
                  isGamesActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                🕹️ Games
                <motion.span
                  className="text-xs"
                  animate={{ rotate: gamesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▾
                </motion.span>
                {isGamesActive && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-300 rounded-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>

              <AnimatePresence>
                {gamesOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-3xl shadow-2xl border-2 border-purple-100 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2">
                      {games.map((game, i) => (
                        <motion.button
                          key={game.id}
                          onClick={() => goToGame(game.id)}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-purple-50 transition-colors text-left group"
                          whileHover={{ x: 4 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-2xl w-9 h-9 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            {game.emoji}
                          </span>
                          <div>
                            <p className="font-black text-gray-800 text-sm">{game.label}</p>
                            <p className="text-xs text-gray-400">{game.desc}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.span
              className="hidden md:block text-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.span>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden w-10 h-10 bg-white/20 rounded-2xl flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span className="block w-5 h-0.5 bg-white rounded"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-5 h-0.5 bg-white rounded"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-5 h-0.5 bg-white rounded"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white/10 backdrop-blur px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => { handleCategoriesClick(e, item.path); setMenuOpen(false); }}
                >
                  <motion.div
                    className={`px-4 py-2.5 rounded-2xl font-bold text-sm ${
                      isActive(item.path) ? "bg-white/30 text-white" : "text-white/80"
                    }`}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}

              {/* Mobile Games section */}
              <div>
                <motion.button
                  onClick={() => setMobileGamesOpen((v) => !v)}
                  className={`w-full text-left px-4 py-2.5 rounded-2xl font-bold text-sm flex items-center justify-between ${
                    isGamesActive ? "bg-white/30 text-white" : "text-white/80"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>🕹️ Games</span>
                  <motion.span animate={{ rotate: mobileGamesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    ▾
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {mobileGamesOpen && (
                    <motion.div
                      className="ml-4 mt-1 flex flex-col gap-1"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {games.map((game) => (
                        <button
                          key={game.id}
                          onClick={() => goToGame(game.id)}
                          className="text-left px-4 py-2 rounded-2xl font-bold text-sm text-white/80 hover:bg-white/20 flex items-center gap-2"
                        >
                          <span>{game.emoji}</span> {game.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
