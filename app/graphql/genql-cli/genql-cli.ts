import { getEnv } from "~/common";

import { createClient } from "../genql-sdk";

console.log({
  graphql: getEnv("GRAPHQL_URL"),
  adminid: getEnv("HASURA_ADMIN"),
});

export const genql = createClient({
  url: "https://xdwipkiowyoinqhbqher.nhost.run/v1/graphql",
  headers: {
    "X-Hasura-Admin-Secret": "32f6eb94c995ee3bf6d82672b53fb2a5",
    "X-Hasura-Role": "admin",
  },
});
