import React from "react";

import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Panel = ({
  children,
  ...rest
}: React.PropsWithChildren<BoxProps>) => (
  // const bg = useColorModeValue("white", "gray.400");
  <Box
    className="panel"
    m="2"
    px="6"
    py="4"
    bg="white"
    borderRadius={10}
    boxShadow="sm"
    {...rest}
  >
    {children}
  </Box>
);
