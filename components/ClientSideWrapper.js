"use client";
import { getVideoDetails } from "@/app/action";
import React, { useState, useTransition } from "react";
import VideoDetails from "./VideoDetails";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { isValidYouTubeUrl } from "@/utils/validator";

const ClientSideWrapper = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [videoFormats, setVideoFormats] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    setError("");
    setVideoFormats(null);
    const isValid = isValidYouTubeUrl(url);
    if (!isValid) {
      setError("Please enter correct url");
      return;
    }

    startTransition(async () => {
      const format = await getVideoDetails(url);
      console.log(format);
      if (format) {
        setVideoFormats(format);
      } else setError("Video not found or Somethings wrong");
    });
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <div className="bg-secondary p-4 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <InputField
            value={url}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=cU8xpsdLsdE"
          />
          <SubmitButton isPending={isPending} onClick={handleSubmit} />
        </div>
        {error && (
          <span className="p-3 mt-4 text-sm rounded-md bg-red-400 text-red-900">{error}</span>
        )}
      </div>
      {videoFormats && <VideoDetails format={videoFormats} />}
    </>
  );
};

export default ClientSideWrapper;
