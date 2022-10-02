import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { FiGrid } from "react-icons/fi";

import { Panel } from "~/components/core";
import { isAuthenticated } from "~/components/modules/authentication/check-auhenticated";

export const meta: MetaFunction = () => ({
  title: "paygroup - dashboard",
});

export const handle = {
  breadcrumb: "dashboard",
  icon: FiGrid,
};

export const loader: LoaderFunction = async ({ request }) =>
  isAuthenticated(request).then((ok) => (ok ? null : redirect("/login")));

export default function Index() {
  return <Panel>content</Panel>;
}
