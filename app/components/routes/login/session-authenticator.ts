import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

import { nhostAuthenticate } from "./nhost-authenticate";
import { sessionStorage } from "./session-storage";

export const authenticator = new Authenticator<
  Awaited<ReturnType<typeof nhostAuthenticate>>["session"]
>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const res = await nhostAuthenticate({ email, password });
    return res.session;
  }),
  "nhost_auth"
);
