import { useBreakpointValue, useDisclosure, useToken } from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";

import { useNProgress } from "../nprogress";

export const usePageLayout = () => {
  const location = useLocation();
  const isAuthpage = location.pathname === "/authenticate";

  const [headerHeight] = useToken("space", ["28"]);
  const open = useBreakpointValue<boolean | undefined>({
    base: false,
    lg: undefined,
  });
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
    isOpen: open,
  });
  useNProgress();

  return {
    isOpen,
    isAuthpage,
    headerHeight,
    onToggle,
  };
};
