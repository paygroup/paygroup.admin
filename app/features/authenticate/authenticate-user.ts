import { createServerSideClient } from "@nhost/nextjs";
import { redirect } from "@remix-run/node";

import { sessionStorage } from "./session-storage";

export const authenticateUser = async (props: {
  email: string;
  password: string;
}) => {
  const { email, password } = props;
  const client = await createServerSideClient(
    "https://xdwipkiowyoinqhbqher.nhost.run",
    {}
  );
  const result = await client.auth.signIn({ email, password });
  const session = await sessionStorage.getSession();
  session.set("nhost_session", result.session);
  console.log("session", JSON.stringify(session, null, 2));
  return redirect("/", {
    headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
  });
  // return redirect("/authenticate");
};
