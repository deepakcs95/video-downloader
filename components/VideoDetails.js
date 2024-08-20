"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoDetails({ format }) {
  const [detailsHeight, setDetailsHeight] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(detailsRef.current.scrollHeight);
    }
  }, [format]);

  console.log(format);

  const videoFormats = format.filter((format) => format.hasVideo === true);

  return (
    <div
      ref={detailsRef}
      className="bg-secondary rounded-lg mt-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: `${detailsHeight}px` }}
    >
      <div className="p-4">
        {videoFormats &&
          videoFormats.map((detail, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center mb-2 last:mb-0 gap-2 sm:gap-4"
            >
              <span className="truncate">{detail.container}</span>
              <span className="truncate">
                {detail.qualityLabel}
                {!detail.hasAudio && "🔇"}
                {detail.hasVideo && "🎞️"}
              </span>
              <a
                href={detail.url}
                className="bg-black p-2 text-white hover:text-gray-700 rounded text-xs sm:text-sm"
              >
                Download
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
