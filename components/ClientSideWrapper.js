"use client";
import { getVideoDetails } from "@/app/action";
import React, { useState, useTransition } from "react";
import VideoDetails from "./VideoDetails";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const ClientSideWrapper = () => {
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
      </div>
      {videoFormats && <VideoDetails format={videoFormats} />}
    </>
  );
};

export default ClientSideWrapper;
