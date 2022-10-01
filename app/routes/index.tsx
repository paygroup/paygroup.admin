import { useEffect } from "react";

import type { MetaFunction } from "@remix-run/node";
import { FiGrid } from "react-icons/fi";

import { Panel, SecuredRoute } from "~/components";

export const meta: MetaFunction = () => ({
  title: "paygroup - dashboard",
});

export const handle = {
  breadcrumb: "dashboard",
  icon: FiGrid,
};

export default function Index() {
  useEffect(() => {
    const nhost_session = window.sessionStorage.getItem("nhost_session");
    console.log({ nhost_session });
  }, []);

  return (
    <SecuredRoute>
      <Panel>content</Panel>
    </SecuredRoute>
  );
}
