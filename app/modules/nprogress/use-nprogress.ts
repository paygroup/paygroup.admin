import { useEffect } from "react";

import { useTransition } from "@remix-run/react";
import NProgress from "nprogress";

export const useNProgress = () => {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === "loading" || transition.state === "submitting") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [transition.state]);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);
};
