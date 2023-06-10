import { hash, publicKey, time } from "@/utils/marvelApi";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash,
  },
});
