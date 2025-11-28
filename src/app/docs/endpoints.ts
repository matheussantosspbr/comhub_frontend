import { reqCreate } from "@/app/docs/requests";
import { resCreate, resGetAll, resGetLink } from "@/app/docs/responses";

export const endpoints = [
  {
    title: "CREATE",
    method: "POST",
    path: "/api/links",
    body: reqCreate,
    response: resCreate,
  },
  {
    title: "GET LINK",
    method: "GET",
    path: "/:slug",
    response: resGetLink,
  },
  {
    title: "GET ALL",
    method: "GET",
    path: "/api/links",
    response: resGetAll,
  },
  {
    title: "DELETE LINK",
    method: "DELETE",
    path: "/api/links/:slug",
    bodyVisible: false,
  },
];
