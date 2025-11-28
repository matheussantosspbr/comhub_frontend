import { redirect } from "next/navigation";
import GetLongUrlToRedirect from "@/infrastructure/GetLongUrlToRedirect";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const res = await GetLongUrlToRedirect(slug);
  if(res.data.status && res.data.status === 404) {
    redirect(`/`);
  }else{
    redirect(`${res.data.url.longUrl}`);
  }
}
