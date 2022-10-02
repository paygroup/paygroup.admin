import { isSession } from "@remix-run/node";

import { SESSION_KEY } from "./constants";
import { sessionStorage } from "./session-storage";

export const isAuthenticated = async (request: Request) => {
  const session = isSession(request)
    ? request
    : await sessionStorage.getSession(request.headers.get("Cookie"));
  const user = session.get(SESSION_KEY);
  console.log({ user });
  return !!user;
};
