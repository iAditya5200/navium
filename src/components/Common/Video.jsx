import React from "react";
import { motion } from "motion/react";

const Video = ({ title, url, className = "" }) => {
  return (
    <div
      className={` overflow-hidden rounded transition-transform duration-300 ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Title Overlay */}
        {title && (
          <h3 className="absolute top-2 left-2 text-xs bg-zinc-700/80 text-white p-1 rounded font-semibold z-10">
            {title}
          </h3>
        )}

        {/* Video */}
        <motion.video
          className="w-full h-full object-cover"
          controls
          src={url}
        />
      </div>
    </div>
  );
};

export default Video;
