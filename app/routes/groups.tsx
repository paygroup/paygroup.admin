import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { HiOutlineUserGroup } from "react-icons/hi";

import { fetchGroupPages, GroupListingPage } from "~/components/routes/groups";

export const meta: MetaFunction = () => ({
  title: "paygroup - groups",
});

export const handle = {
  breadcrumb: "groups",
  icon: HiOutlineUserGroup,
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return fetchGroupPages({
    page: Number(url.searchParams.get("page") ?? 1),
    search: url.searchParams.get("search") as string,
  });
};

export default function Index() {
  const location = useLocation();

  const renderListing =
    location.pathname === "/groups" ||
    location.pathname.startsWith("/groups?page=");

  return <>{renderListing ? <GroupListingPage /> : <Outlet />}</>;
}
