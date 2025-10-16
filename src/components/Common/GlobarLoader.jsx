import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // If page already loaded (like a fast reload)
      setLoading(false);
    } else {
      // Otherwise wait for full load
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
          {/* Animated bouncing or spinning icon */}
          <motion.div
            className="w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default GlobalLoader;
