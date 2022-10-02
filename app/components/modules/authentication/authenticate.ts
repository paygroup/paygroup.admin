import { redirect } from "@remix-run/node";

import { SESSION_KEY } from "./constants";
import { nhostLogin } from "./nhost-login";
import { sessionStorage } from "./session-storage";

export const authenticate = async (request: Request) => {
  const form = await request.formData();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const res = await nhostLogin({ email, password });

  const user = res.session?.user;

  if (user) {
    const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    session.set(SESSION_KEY, user);

    const result = await sessionStorage.commitSession(session);

    console.log({ result });

    redirect("/", {
      headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
    });

    return true;
  }

  throw "User not found";
};
