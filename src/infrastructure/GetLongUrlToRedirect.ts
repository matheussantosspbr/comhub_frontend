import axios from "axios";

export default async function GetLongUrlToRedirect(slug: string) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}`);
    return res;
}