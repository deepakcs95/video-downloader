export function isValidYouTubeUrl(url) {
  const regex = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/;
  return regex.test(url);
}
