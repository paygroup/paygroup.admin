import { getEnv } from "~/common";

import { createClient } from "../genql-sdk";

export const genql = createClient({
  url: getEnv("GRAPHQL_URL"),
  headers: {
    "X-Hasura-Admin-Secret": getEnv("HASURA_ADMIN")!,
    "X-Hasura-Role": "admin",
  },
});
