import axios from "axios";

export async function getLinks() {
  try {
    const { data } = await axios.get("/api/links");
    return data;
  } catch (error) {
    console.error(error);
  }
}
