// src/components/Loader/GlobalLoader.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // safe because GlobalLoader is inside Router

  // 1) initial full-page load detection
  useEffect(() => {
    if (document.readyState === "complete") {
      // already loaded (fast reload), small delay for visual polish
      setTimeout(() => setLoading(false), 500);
    } else {
      const onLoad = () => setTimeout(() => setLoading(false), 500);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // 2) show loader briefly on route change (optional)
  useEffect(() => {
    // don't show on first mount if still in initial loading state
    if (!loading) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 700); // small route loader
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // rerun when route changes

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            {/* animated icon */}
            <motion.div
              className="w-20 h-20 rounded-full border-4 border-sky-600 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute top-[60%] text-slate-600 mt-6">Loading…</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render app children only when not loading (or you can render children and overlay the loader) */}
      <div style={{ filter: loading ? "blur(0px)" : "none" }}>{children}</div>
    </>
  );
}