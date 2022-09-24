import type { MetaFunction } from "@remix-run/node";
import { FiGrid } from "react-icons/fi";

import { Panel } from "~/components";

export const meta: MetaFunction = () => ({
  title: "paygroup - dashboard",
});

export const handle = {
  breadcrumb: "dashboard",
  icon: FiGrid,
};

export default function Index() {
  return <Panel>content</Panel>;
}
