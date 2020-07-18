import axios from "axios";


const apiEndpoint = "https://api.covid19india.org/v3/data.json";

async function getData() {
    const result = await axios.get(apiEndpoint);
    return result;
  }
  

export default {
    getData,
}