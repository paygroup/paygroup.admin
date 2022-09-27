import React from "react";

import { NhostClient, NhostReactProvider } from "@nhost/react";

export const NhostAuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const nhost = new NhostClient({
    subdomain: "xdwipkiowyoinqhbqher",
    region: "eu-central-1",
  });
  return <NhostReactProvider nhost={nhost}>{children}</NhostReactProvider>;
};
