import { createServerSideClient } from "@nhost/nextjs";

export const nhostAuthenticate = async (props: {
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
