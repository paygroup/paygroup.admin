/* eslint-disable @typescript-eslint/consistent-type-imports */
import { assign, createMachine } from "xstate";

export const authMachine = createMachine(
  {
    tsTypes: {} as import("./auth-machine.typegen").Typegen0,
    schema: {
      context: {} as {
        email?: string;
        emailError?: string | undefined;
        password?: string;
        passwordError?: string | undefined;
      },
      events: {} as
        | {
            type: "CHANGE";
            field: "email" | "password";
            value: string;
          }
        | {
            type: "SUBMIT";
          },
    },
    context: {
      email: "",
      emailError: undefined,
      password: "",
      passwordError: undefined,
    },
    initial: "capturing",
    states: {
      capturing: {
        on: {
          CHANGE: [
            { cond: "email_changed", actions: "set_email" },
            { actions: "set_password" },
          ],
          SUBMIT: [
            {
              cond: "is_valid",
              target: "submitting",
            },
            {
              actions: "set_errors",
            },
          ],
        },
      },
      submitting: {
        invoke: {
          src: "authenticate",
          onDone: {
            actions: "to_home",
          },
          onError: {
            actions: "display_error",
          },
        },
      },
    },
  },
  {
    guards: {
      email_changed: (_, event) => event.field === "email",
      is_valid: (ctx) => !!ctx.email?.length && !!ctx.password?.length,
    },
    actions: {
      set_email: assign({
        email: (_, event) => event.value,
        emailError: (ctx, e) => (e.value?.length ? undefined : ctx.emailError),
      }),
      set_password: assign({
        password: (_, event) => event.value,
        passwordError: (ctx, e) =>
          e.value?.length ? undefined : ctx.passwordError,
      }),
      set_errors: assign({
        emailError: (ctx) =>
          ctx.email?.length ? undefined : "Email is required",
        passwordError: (ctx) =>
          ctx.password?.length ? undefined : "Password is required",
      }),
    },
  }
);
