import axios from "axios";

/**
 * Example of public external API:
 */
export const axiosApiDnd = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DND_API,
});
