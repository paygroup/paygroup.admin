// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.(machine).submitting:invocation[0]": {
      type: "done.invoke.(machine).submitting:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.(machine).submitting:invocation[0]": {
      type: "error.platform.(machine).submitting:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    authenticate: "done.invoke.(machine).submitting:invocation[0]";
  };
  missingImplementations: {
    actions: "to_home" | "display_error";
    services: "authenticate";
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    display_error: "error.platform.(machine).submitting:invocation[0]";
    set_email: "CHANGE";
    set_errors: "SUBMIT";
    set_password: "CHANGE";
    to_home: "done.invoke.(machine).submitting:invocation[0]";
  };
  eventsCausingServices: {
    authenticate: "SUBMIT";
  };
  eventsCausingGuards: {
    email_changed: "CHANGE";
    is_valid: "SUBMIT";
  };
  eventsCausingDelays: {};
  matchesStates: "capturing" | "submitting";
  tags: never;
}
