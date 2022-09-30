/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { useAuthenticationStatus } from "@nhost/react";
import { useNavigate } from "@remix-run/react";

import { auth } from "~/modules/nhost";

export const SecuredRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isAuthenticated } = useAuthenticationStatus();
  const [signed, setSigned] = useState(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signed) {
      navigate("/authenticate");
    }
  }, [signed]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((e) => {
      setSigned(e === "SIGNED_IN");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!signed) {
    return <></>;
  }

  return <>{children}</>;
};
