import { getEnv } from "~/common";

import { createClient } from "../genql-sdk";

console.log(getEnv("GRAPHQL_URL"));

export const genql = createClient({
  url: getEnv("GRAPHQL_URL"),
  headers: {
    "X-Hasura-Admin-Secret": getEnv("HASURA_ADMIN")!,
    "X-Hasura-Role": "admin",
  },
});
