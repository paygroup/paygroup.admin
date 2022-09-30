import { useNavigate } from "@remix-run/react";
import { useMachine } from "@xstate/react";

import { auth } from "~/modules/nhost";

import { authMachine } from "./auth-machine";

export const useAuthenticate = () => {
  const navigate = useNavigate();

  const [state, send] = useMachine(authMachine, {
    actions: {
      display_error: (_) => {
        console.error("error");
      },
      to_home: (_) => {
        navigate("/");
      },
    },
    services: {
      authenticate: async (ctx) =>
        auth.signIn({
          email: ctx.email as string,
          password: ctx.password as string,
        }),
    },
  });
  const authenticating = state.matches("submitting");
  const fields = {
    email: {
      value: state.context.email,
      error: state.context.emailError,
      onChange: (value: string) =>
        send({ type: "CHANGE", field: "email", value }),
    },
    password: {
      value: state.context.password,
      error: state.context.passwordError,
      onChange: (value: string) =>
        send({ type: "CHANGE", field: "password", value }),
    },
  };
  const onSubmit = () => send({ type: "SUBMIT" });

  return {
    authenticating,
    fields,
    onSubmit,
  };
};
