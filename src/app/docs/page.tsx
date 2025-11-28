import { endpoints } from "@/app/docs/endpoints";
import EndPoint from "@/components/EndPoint";
import Layout from "@/layout/layout";

export default function Docs() {
  return (
    <Layout>
      <div className="w-full text-center mb-10">
        <h1 className="text-2xl font-bold">Documentação</h1>
        <p>Documentação de como usar a API</p>
      </div>

      <main className="flex flex-col gap-4 px-20 min-h-screen bg-white">
        <h2 className="text-xl font-semibold">Endpoints</h2>

        <ul className="flex flex-col gap-6">
          {endpoints.map((ep) => (
            <EndPoint title={ep.title} method={ep.method} path={ep.path} body={ep.body} response={ep.response} bodyVisible={ep.bodyVisible} key={ep.title} />
          ))}
        </ul>
      </main>
    </Layout>
  );
}
