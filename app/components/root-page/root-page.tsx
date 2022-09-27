/* eslint-disable react/display-name */
import React from "react";

import { Flex, Grid, useToken, Box } from "@chakra-ui/react";

import type { Sitemap } from "~/types";

import { Sidebar } from "../sidebar";
import { PageHeader } from "./page.header";
import { usePageLayout } from "./use-page-layout";

export const RootPage = ({
  sitemap,
  children,
}: React.PropsWithChildren<{ sitemap: Sitemap }>) => {
  const { isOpen, headerHeight, isAuthpage, onToggle } = usePageLayout();

  return (
    <PageLayout
      sitemap={sitemap}
      isOpen={isOpen}
      isAuthpage={isAuthpage}
      onToggle={onToggle}
    >
      {isAuthpage ? (
        <>{children}</>
      ) : (
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
      )}
    </PageLayout>
  );
};

const PageLayout = ({
  isOpen,
  sitemap,
  isAuthpage,
  children,
  onToggle,
}: React.PropsWithChildren<{
  isOpen: boolean;
  sitemap: Sitemap;
  isAuthpage: boolean;
  onToggle: () => void;
}>) => {
  const [min, max] = useToken("sizes.sidebar", ["min", "max"]);

  return (
    <Flex
      className="layout"
      h="100%"
      flexDirection={isAuthpage ? "column" : "row"}
    >
      {isAuthpage ? (
        <>{children}</>
      ) : (
        <>
          <Sidebar sitemap={sitemap} isOpen={isOpen} onToggle={onToggle} />
          <Flex className="layout-content" flex={1} ml={isOpen ? max : min}>
            {children}
          </Flex>
        </>
      )}
    </Flex>
  );
};
