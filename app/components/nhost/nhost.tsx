import React from "react";

import { NhostClient, NhostReactProvider } from "@nhost/react";

export const nhost = new NhostClient({
  subdomain: "xdwipkiowyoinqhbqher",
  region: "eu-central-1",
});

const { auth } = nhost;

export { auth };

export const NhostAuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <NhostReactProvider nhost={nhost}>{children}</NhostReactProvider>;
