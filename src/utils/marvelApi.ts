import md5 from "md5";

export const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_SECRET_KEY;

export const time = Number(new Date());

export const hash = md5(time + privateKey + publicKey);
