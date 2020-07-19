import axios from "axios";

const apiEndpoint = "https://api.covid19india.org/v3/timeseries.json";

export async function getTimeData() {
  const result = await axios.get(apiEndpoint);
  return result;
}
