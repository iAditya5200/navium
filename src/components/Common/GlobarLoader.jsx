// src/components/GlobalLoader.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_TIME = 1500; // minimum time loader stays visible (ms)
    const start = Date.now();

    const waitForMedia = async () => {
      const elements = Array.from(document.querySelectorAll("img, video"));
      const mediaPromises = elements.map((el) => {
        return new Promise((resolve) => {
          if (el.tagName === "IMG") {
            if (el.complete) resolve();
            else el.addEventListener("load", resolve, { once: true });
          } else if (el.tagName === "VIDEO") {
            if (el.readyState >= 3) resolve(); // HAVE_FUTURE_DATA
            else el.addEventListener("loadeddata", resolve, { once: true });
          } else resolve();
        });
      });

      await Promise.allSettled(mediaPromises);
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_TIME - elapsed);
      setTimeout(() => setLoading(false), remaining);
    };

    waitForMedia();
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Spinning icon */}
            <motion.div
              className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
}
