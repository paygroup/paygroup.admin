import React from "react";

import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const Panel = ({
  children,
  ...rest
}: React.PropsWithChildren<FlexProps>) => (
  <Flex
    className="panel"
    m="2"
    px="6"
    py="4"
    bg="white"
    flexDirection="column"
    borderRadius={10}
    boxShadow="sm"
    {...rest}
  >
    {children}
  </Flex>
);
