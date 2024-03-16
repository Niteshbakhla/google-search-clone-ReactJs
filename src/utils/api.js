import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const NewsApi = "584353a1f6b1c88bdce4ab4d5605eb50";
const YOUTBUE_API = "AIzaSyDLfh-8jOOVXLyFl8zbQY9yh2kczmK79D8";

const Googleparams = {
  key: "AIzaSyAh3Uq4RcTDbdMu7s0ggO3YIYaO5S_C6fk",
  cx: "e6edf58540a324961",
};

const NewsUrl = "https://gnews.io/api/v4/search";

export const fetchDataNewsApi = async (query) => {
  try {
    const { data } = await axios.get(
      `${NewsUrl}?q=${query}&lang=en&country=us&max=10&apikey=584353a1f6b1c88bdce4ab4d5605eb50`
    );
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...payload, ...Googleparams },
  });

  return data;
};

export const fetchDataYoutube = async (query) => {
  const { data } = await axios.get(
    ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&q=${query}&key=${YOUTBUE_API} `
  );

  return data;
};
