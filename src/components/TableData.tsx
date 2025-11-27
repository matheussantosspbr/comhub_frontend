import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function TableData() {
  const [btnStatus, setBtnStatus] = useState<'SUCCESS' | null>(null);
  const [links, setLinks] = useState<any[]>([]);
  const HOST = process.env.NEXT_PUBLIC_HOST;

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/links`);
        const data = await res.data;
        setLinks(data.urls || []);
      } catch (error) {
        console.error("Erro ao buscar links:", error);
        setLinks([]);
      }
    };

    fetchLinks();
  }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setBtnStatus('SUCCESS');
            setTimeout(() => {
                setBtnStatus(null);
            }, 2000);
        })
    };

    const deleteLink = (slug: string) => {
      Swal.fire({
        title: "Tem certeza que deseja remover ?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, remover!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/links/${slug}`)
          .then(() => {
            setLinks(links.filter((link: any) => link.slug !== slug));
            Swal.fire({
            title: "Removido!",
            text: "Link removido com sucesso.",
            icon: "success"
          });
          })
          .catch((error) => {
            console.error("Erro ao deletar link:", error);
            Swal.fire({
            title: "Erro!",
            text: "Link não foi removido.",
            icon: "error"
          });
          });
        }
      });
    };
  return (
    <>
      {links.length > 0 ? (
        links.map((link: any) => (
          <tr key={link.id} className="border border-gray-300 h-16">
            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">{link.longUrl}</td>
            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">{`${HOST}/${link.slug}`}</td>
            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">{link.clicks}</td>
            <td className="border border-gray-300 px-6 text-center">
              <button type="button" onClick={() => copyToClipboard(`${HOST}/${link.slug}`)} className="bg-blue-600 h-8 w-8 md:h-10 md:w-10 text-white p-1 rounded-md ml-4 hover:bg-blue-500">
                {btnStatus === 'SUCCESS' ? (
                    <i className="fa-solid fa-check text-xs"></i>
                ) : (
                    <i className="fa-solid fa-copy text-xs md:text-base"></i>
                )}
              </button>
              <button type="button" onClick={() => deleteLink(link.slug)} className="bg-red-600 h-8 w-8 md:h-10 md:w-10 text-white p-1 rounded-md ml-4 hover:bg-red-500">
                <i className="fa-solid fa-trash text-xs md:text-base"></i>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr className="border border-gray-300">
          <td colSpan={4} className="text-center p-2">
            Nenhum dado criado
          </td>
        </tr>
      )}
    </>
  );
}
