import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 150,
        y: mouse.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[320px] w-[320px] rounded-full opacity-70 blur-[120px]"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.08) 45%, transparent 75%)",
      }}
    />
  );
};

export default CursorGlow;
