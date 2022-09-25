import { getEnv } from "~/common";

import { createClient } from "../genql-sdk";

console.log({
  graphql: getEnv("GRAPHQL_URL"),
  adminid: getEnv("HASURA_ADMIN"),
});

export const genql = createClient({
  url: getEnv("GRAPHQL_URL"),
  headers: {
    "X-Hasura-Admin-Secret": getEnv("HASURA_ADMIN")!,
    "X-Hasura-Role": "admin",
  },
});
