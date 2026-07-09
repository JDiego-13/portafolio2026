import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollTop}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-500 p-4 text-white shadow-lg"
    >
      <ChevronUp size={22} />
    </motion.button>
  );
};

export default ScrollToTop;