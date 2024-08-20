export default function VideoDetailItem({ detail }) {
  return (
    <div className="grid grid-cols-3 items-center mb-2 last:mb-0 gap-2 sm:gap-4">
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
  );
}
