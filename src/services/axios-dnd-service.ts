import axios from "axios";

// TODO: Setup simple Service

/**
 * Example of public external API:
 */
export const axiosApiDnd = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DND_API,
});
