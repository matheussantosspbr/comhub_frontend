"use client";

import { useState } from "react";
import CreateLink from "@/infrastructure/CreateLink";

export default function Form() {
      const [link, setLink] = useState('');
      const [btnDisabled, setBtnDisabled] = useState(false);
      const [btnStatus, setBtnStatus] = useState<'SUCCESS' | 'ERROR' | null>(null);

      const encurtar = async () => {
        const urlRegex = /^https:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
        if (!urlRegex.test(link)) {
          return alert("URL inválida. Deve começar com https://");
        }
          
        setBtnDisabled(true);
        setTimeout(async () => {
            const res = await CreateLink(link);
            if(res.status && res.status === 201){
                setBtnStatus('SUCCESS');
                setTimeout(() => {
                    setBtnDisabled(false);
                    setBtnStatus(null);
                    location.reload();
                }, 2000);
            }else{
                setBtnStatus('ERROR');
                console.log(res);
                setTimeout(() => {
                    setBtnDisabled(false);
                    setBtnStatus(null);
                }, 2000);
            }
        }, 1000);
        
      }
    return (
        <form action={encurtar} className="w-full flex justify-center items-end mb-10">
            <div className="flex flex-col justify-center items-start w-4/5 md:w-1/2">
                <label htmlFor="link">Link para encurtar:</label>
                <input type="link" id="link" name="link" className="border border-gray-300 rounded-md p-2 w-full" placeholder="https://example.com" onChange={(e) => setLink(e.target.value)} required/>
            </div>
            <button type="submit" disabled={btnDisabled} className="bg-blue-600 h-10 w-10 text-white p-2 rounded-md ml-4 hover:bg-blue-500 cursor-pointer">
                {btnDisabled ? (
                    btnStatus === 'SUCCESS' ? (
                        <i className="fa-solid fa-check"></i>
                    ) : btnStatus === 'ERROR' ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : btnStatus === null ? (
                        <i className="fa-solid fa-spinner animate-spin"></i>
                    ) : ''
                ) : (
                    <i className="fa-solid fa-link"></i>
                )}

            </button>
        </form>
    );
}