import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
axios.defaults.headers.common["Authorization"] = "Bearer auth token";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.timeout = 0;
