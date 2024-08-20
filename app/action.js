"use server";

const { default: getVideoFromats } = require("@/utils/video-fetcher");

export async function getVideoDetails(url) {
  try {
    const format = getVideoFromats(url);
    return format;
  } catch (error) {
    return null;
  }
}
