import type { NhostSession } from "@nhost/nextjs";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

import type { NhostLogin } from "./nhost-login";
import { nhostLogin } from "./nhost-login";
import { sessionStorage } from "./session-storage";

export const authenticator = new Authenticator<
  NhostSession["user"] | NhostLogin
>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const res = await nhostLogin({ email, password });

    if (!res.session?.user) {
      console.log("user not found", { email, password });
      throw "user not found";
    }

    return res.session?.user as NhostSession["user"];
  }),
  "nhost_auth"
);
