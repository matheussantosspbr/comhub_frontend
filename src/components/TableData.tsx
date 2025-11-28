"use client";

import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import GetLinks from "../infrastructure/GetLinks";
import DeleteLink from "../infrastructure/DeleteLink";
import Alert from "./Alerts/Alert";

interface linksProps {
  id: string;
  longUrl: string;
  slug: string;
  clicks: number;
}

export default function TableData() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [links, setLinks] = useState<linksProps[]>([]);
  const HOST = process.env.NEXT_PUBLIC_HOST;

  useEffect(() => {
    const fetchLinks = async () => {
      const data = await GetLinks();
      setLinks(data || []);
    };
    fetchLinks();
  }, []);

  const copyToClipboard = (slug: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    });
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
        const res = await DeleteLink(slug);
        if(res.status && res.status === 204) {
          Alert({title: "Removido", text: "Link removido com sucesso.", icon: "success"});
          setLinks((prev) => prev.filter((l) => l.slug !== slug));
        }else{
          Alert({title: "Erro!", text: "Link não foi removido.", icon: "error"});
          console.log(res)
        }
      }
    });
  };

  return (
    <>
      {links.length > 0 ? (
        links.map((link) => (
          <tr key={link.id} className="border border-gray-300 h-16">
            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">
              {link.longUrl}
            </td>

            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">
              {`${HOST}/${link.slug}`}
            </td>

            <td className="border border-gray-300 px-6 text-center text-xs md:text-base">
              {link.clicks}
            </td>

            <td className="border border-gray-300 px-6 text-center">
              <button
                type="button"
                onClick={() => copyToClipboard(link.slug, `${HOST}/${link.slug}`)}
                className="bg-blue-600 h-8 w-8 md:h-10 md:w-10 text-white p-1 rounded-md ml-4 hover:bg-blue-500"
              >
                {copiedSlug === link.slug ? (
                  <i className="fa-solid fa-check text-xs"></i>
                ) : (
                  <i className="fa-solid fa-copy text-xs md:text-base"></i>
                )}
              </button>

              <button
                type="button"
                onClick={() => deleteLink(link.slug)}
                className="bg-red-600 h-8 w-8 md:h-10 md:w-10 text-white p-1 rounded-md ml-4 hover:bg-red-500"
              >
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
