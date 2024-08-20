"use client";

import VideoDetails from "@/components/VideoDetails";
import { useState, useTransition } from "react";
import { getVideoDetails } from "./action";

export default function Home() {
  const [url, setUrl] = useState("");
  const [videoFormats, setVideoFormats] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const format = await getVideoDetails(url);
      console.log(format);
      setVideoFormats(format);
    });
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-start px-4 py-8">
      <header className="w-full max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-secondary">DownloadDash</h1>
      </header>

      <main className="w-full max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Fast & Easy Video Downloads
        </h2>
        <p className="text-base sm:text-lg text-secondary mb-8">
          Effortlessly download and store your favorite videos with a single click.
        </p>

        <div className="bg-secondary p-4 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              value={url}
              onChange={handleChange}
              className="bg-transparent p-2 outline-none w-full"
              placeholder="https://www.youtube.com/watch?v=cU8xpsdLsdE"
            />
            <button
              disabled={isPending}
              className="w-full sm:w-auto px-6 py-2 bg-primary text-secondary rounded hover:bg-opacity-90 transition-colors min-w-[120px]"
              onClick={handleSubmit}
            >
              {isPending ? (
                <span className="inline-block w-5 h-5">
                  <svg
                    className="animate-spin h-4 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>

        {videoFormats && <VideoDetails format={videoFormats} />}
      </main>
    </div>
  );
}
