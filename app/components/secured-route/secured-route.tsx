/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAuthenticationStatus } from "@nhost/react";
import { useNavigate } from "@remix-run/react";

export const SecuredRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isAuthenticated } = useAuthenticationStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/authenticate");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <></>;
  }

  return <>{children}</>;
};
