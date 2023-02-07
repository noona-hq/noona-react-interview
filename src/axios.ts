import axios from "axios";

axios.interceptors.request.use(async (config) => {
  return {
    ...config,
    baseURL: "https://api.noona.is",
    // We would usually add headers here, etc but that's not needed for this demo.
  };
});
