import ytdl from "@distube/ytdl-core";

export default async function getVideoFromats(url) {
  const cookies = await JSON.parse(process.env.NEXT_PUBLIC_YOUTUBE_COOKIES || "[]");
  console.log("cookies ", cookies);

  try {
    const agent = ytdl.createAgent(cookies);
    const videInfo = await ytdl.getInfo(url, { agent });
    return videInfo.formats;
  } catch (error) {
    console.log(error);
  }
}
