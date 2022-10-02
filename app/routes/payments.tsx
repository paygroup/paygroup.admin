import type { MetaFunction } from "@remix-run/node";
import { BsGraphUp } from "react-icons/bs";

import { Panel } from "~/components/core";

export const meta: MetaFunction = () => ({
  title: "paygroup - payments",
});

export const handle = {
  breadcrumb: "payments",
  icon: BsGraphUp,
};

export default function Index() {
  return <Panel>payments</Panel>;
}
