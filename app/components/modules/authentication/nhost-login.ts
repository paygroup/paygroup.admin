import { createServerSideClient } from "@nhost/nextjs";

export const nhostLogin = async (props: {
  email: string;
  password: string;
}) => {
  const { email, password } = props;
  const client = await createServerSideClient(
    "https://xdwipkiowyoinqhbqher.nhost.run",
    {}
  );
  return client.auth.signIn({ email, password });
};

export type NhostLogin = Awaited<ReturnType<typeof nhostLogin>>;
