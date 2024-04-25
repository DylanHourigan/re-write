import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  paraphraseV1(data) {
    try {
      return apiClient.post("/V1/paraphrase/", data);
    } catch (error) {
      return error;
    }
  },
  paraphraseV2(data) {
    try {
      return apiClient.post("/V2/paraphrase/", data);
    } catch (error) {
      return error;
    }
  },
  paraphraseMulti(data) {
    try {
      return apiClient.post("/V2/paraphrase/multiple", data);
    } catch (error) {
      return error;
    }
  },
  storeData(data) {
    try {
      return apiClient.post("/storeData/", data);
    } catch (error) {
      return error;
    }
  },
};
