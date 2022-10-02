import type { MetaFunction } from "@remix-run/node";
import { FiSettings } from "react-icons/fi";

import { Panel } from "~/components-core";

export const meta: MetaFunction = () => ({
  title: "paygroup - settings",
});

export const handle = {
  breadcrumb: "settings",
  icon: FiSettings,
};

export default function Index() {
  return <Panel>settings</Panel>;
}
