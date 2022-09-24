import { useEffect } from "react";

import { useTransition } from "@remix-run/react";
import Nprogress from "nprogress";

export const useNProgress = () => {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === "loading" || transition.state === "submitting") {
      Nprogress.start();
    } else {
      Nprogress.done();
    }
  }, [transition.state]);
};
