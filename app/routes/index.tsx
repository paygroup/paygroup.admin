import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { FiGrid } from "react-icons/fi";

import { Panel } from "~/components/core";
import { authenticator } from "~/components/routes";

export const meta: MetaFunction = () => ({
  title: "paygroup - dashboard",
});

export const handle = {
  breadcrumb: "dashboard",
  icon: FiGrid,
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log("dashboard page");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return null;
};

export default function Index() {
  return <Panel>content</Panel>;
}
