"use client";
import Layout from "@/layout/layout";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Form from "@/components/Form";
import TableData from "@/components/TableData";

export default function Home() {



  return (
    <Layout>
      <Form/>
      <section className=" w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-10">Links Encurtados</h2>
        <div className="w-full overflow-x-auto md:overflow-x-hidden sm:flex sm:justify-center sm:items-center md:px-20">
        <table className="min-w-max md:w-full border border-gray-300">
          <thead>
            <tr className="border border-gray-300">
              <th className="border border-gray-300 p-2 text-xs md:text-base">Link Original</th>
              <th className="border border-gray-300 p-2 text-xs md:text-base">Link Encurtado</th>
              <th className="border border-gray-300 p-2 text-xs md:text-base">Visitas</th>
              <th className="border border-gray-300 p-2 text-xs md:text-base">Ações</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<Loading />}>
              <TableData />
            </Suspense>
          </tbody>
        </table>
        </div>
      </section>
    </Layout>
  );
}
