"use client";

import { Activity, useState } from "react";

interface EndPointProps {
    title: string;
    method: string;
    path: string;
    body?: string;
    response?: string;
    bodyVisible?: boolean;
}

export default function EndPoint({ title, method, path, body, response, bodyVisible = true }: EndPointProps) {
    const [show, setShow] = useState(false);

    const methodColor: Record<string, string> = {
        "POST": "bg-green-700",
        "GET": "bg-blue-700",
        "PUT": "bg-yellow-700",
        "DELETE": "bg-red-700",
    };

    return (
        <div className="flex flex-col gap-2 p-4 border border-gray-400 rounded-md mb-4">
            <h2 className="font-bold">{title}</h2>
            <div className="flex gap-2">
                <h3 className={`text-white p-2 rounded-md h-10 w-20 text-center ${methodColor[method]}`}>
                    {method}
                </h3>
                <p className="h-10 bg-gray-800 text-white p-2 rounded-md w-full px-4 tracking-widest">
                    {path}
                </p>
                <Activity mode={bodyVisible ? "visible" : "hidden"}>
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="p-2 rounded-md px-4 w-10 h-10 flex items-center justify-center cursor-pointer border border-gray-400"
                    >
                        {show ? (
                            <i className="fa-solid fa-arrow-up"></i>
                        ) : (
                            <i className="fa-solid fa-arrow-down"></i>
                        )}
                    </button>
                </Activity>
            </div>
            {show && (
                <div className="w-full p-6 bg-gray-50 border border-gray-400 rounded-2xl">
                    <Activity mode={body ? "visible" : "hidden"}>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-black mb-5 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                Request
                            </h3>

                            <p className="text-sm font-semibold text-black mb-2">Body:</p>

                            <div className="rounded-xl bg-gray-900 text-gray-100 p-4 text-sm shadow-inner">
                                <pre>{body}</pre>
                            </div>
                        </div>
                    </Activity>
                    <Activity mode={response ? "visible" : "hidden"}>
                        <div>
                            <h3 className="text-xl font-bold text-black mb-5 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                Response
                            </h3>

                            <div className="rounded-xl bg-gray-900 text-gray-100 p-4 text-sm shadow-inner">
                                <pre>{response}</pre>
                            </div>
                        </div>
                    </Activity>

                </div>
            )}
        </div>
    );
}
