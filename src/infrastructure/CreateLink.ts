import axios from "axios";

export default async function CreateLink(link: string) {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/links`, {
        longUrl: link
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}