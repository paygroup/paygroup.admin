import type { MetaFunction } from "@remix-run/node";
import { BsPeople } from "react-icons/bs";

import { Panel } from "~/components-core";

export const meta: MetaFunction = () => ({
  title: "paygroup - users",
});

export const handle = {
  breadcrumb: "users",
  icon: BsPeople,
};

export default function Index() {
  return <Panel>users</Panel>;
}
