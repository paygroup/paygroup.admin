/* eslint-disable react/display-name */
import React from "react";

import {
  Flex,
  Grid,
  useToken,
  Box,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import type { Sitemap } from "~/types";

import { useNProgress } from "../nprogress";
import { Sidebar } from "../sidebar";
import { PageHeader } from "./page.header";

export const PageLayout = ({
  sitemap,
  children,
}: React.PropsWithChildren<{
  sitemap: Sitemap;
}>) => {
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

  return (
    <Layout sitemap={sitemap} isOpen={isOpen} onToggle={onToggle}>
      <Grid
        flex={1}
        w="100%"
        className="layout-grid"
        templateRows={`${headerHeight} 1fr`}
        templateColumns="1fr"
        templateAreas="
            'header'
            'content'
          "
      >
        <Box className="grid-header" gridArea="header">
          <PageHeader isOpen={isOpen} onToggle={onToggle} />
        </Box>

        <Flex
          className="grid-content"
          gridArea="content"
          flexDirection="column"
          bg="#e2e8f0"
          borderTopWidth={1}
          p={{ base: "1", md: "4" }}
        >
          {children}
        </Flex>
      </Grid>
    </Layout>
  );
};

const Layout = ({
  isOpen,
  sitemap,
  children,
  onToggle,
}: React.PropsWithChildren<{
  isOpen: boolean;
  sitemap: Sitemap;
  onToggle: () => void;
}>) => {
  const [min, max] = useToken("sizes.sidebar", ["min", "max"]);

  return (
    <Flex className="layout" h="100%" flexDirection="row">
      <Sidebar sitemap={sitemap} isOpen={isOpen} onToggle={onToggle} />
      <Flex className="layout-content" flex={1} ml={isOpen ? max : min}>
        {children}
      </Flex>
    </Flex>
  );
};
