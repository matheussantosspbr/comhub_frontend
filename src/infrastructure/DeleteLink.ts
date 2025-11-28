import axios from "axios";

export default async function DeleteLink(slug: string) {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/links/${slug}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}