import axios from "axios";

export default async function GetLinks() {

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/links`);
        const data = await res.data;
        return data.urls || [];
    } catch (error) {
        console.error("Erro ao buscar links:", error);
        return [];
    }

}