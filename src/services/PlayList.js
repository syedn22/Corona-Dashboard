import axios from "axios";

const apiEndpoint =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU07-dOwgza1IguKA86jqxNA&key=AIzaSyBIHbd3dHFzXaIuy5Q3IiZll517w5TNvhw";

export async function getPlaylist() {
  const result = await axios.get(apiEndpoint);
  return result.data.items;
}
