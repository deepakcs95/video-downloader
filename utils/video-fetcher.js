import ytdl from "@distube/ytdl-core";

export default async function getVideoFromats(url) {
  try {
    const videInfo = await ytdl.getInfo(url);
    return videInfo.formats;
  } catch (error) {
    console.log(error);
  }
}
