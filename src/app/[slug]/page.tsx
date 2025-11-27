import { redirect } from "next/navigation";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}`);
  if(res.status && res.status === 404) {
    redirect(`/`);
  }else{
      const data = await res.json();
      redirect(`${data}`);
  }
}
