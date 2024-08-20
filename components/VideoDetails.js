import { useState, useEffect, useRef } from "react";
import VideoDetailItem from "@/components/VideoDetailItem";

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
          videoFormats.map((detail, index) => <VideoDetailItem key={index} detail={detail} />)}
      </div>
    </div>
  );
}
