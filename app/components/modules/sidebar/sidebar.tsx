import React from "react";

import {
  Text,
  Flex,
  Icon,
  Center,
  ListItem,
  UnorderedList,
  useToken,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { useTransition } from "@remix-run/react";
import type { Transition } from "@remix-run/react/dist/transition";
import type { IconType } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

import type { Sitemap } from "~/types";

export const Sidebar: React.FC<{
  isOpen: boolean;
  sitemap: Sitemap;
  onToggle: () => void;
}> = ({ sitemap, isOpen, onToggle }) => (
  <Container isOpen={isOpen}>
    <AppLogo isOpen={isOpen} onToggle={onToggle} />

    <NavList>
      {sitemap.map((s, i) => (
        <NavItem
          key={s.to}
          isOpen={isOpen}
          icon={s.icon}
          to={s.to}
          isLast={i > 0 && i === sitemap.length - 1}
        >
          {s.title}
        </NavItem>
      ))}
    </NavList>
  </Container>
);

const Container: React.FC<React.PropsWithChildren<{ isOpen: boolean }>> = ({
  isOpen,
  children,
}) => {
  const [min, max] = useToken("sizes.sidebar", ["min", "max"]);

  return (
    <Flex
      className="sidebar"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width={isOpen ? max : min}
      bg="blue.900"
      zIndex={99}
      transition="all 0.3s ease"
      flexDirection="column"
    >
      {children}
    </Flex>
  );
};

const AppLogo: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({
  isOpen,
  onToggle,
}) => (
  <Center mt="4">
    <IconButton
      size="sm"
      onClick={onToggle}
      aria-label="toggle sidebar"
      colorScheme="white"
      borderRadius={8}
      borderWidth={0}
      variant="outline"
      opacity={isOpen ? 0 : 1}
      transition="all 0.2s ease"
      icon={<Icon as={FiMenu} color="gray.300" fontSize="xl" fontWeight="lg" />}
    />
  </Center>
);

const NavList: React.FC<React.PropsWithChildren> = ({ children }) => (
  <UnorderedList
    mt="-4"
    h="100%"
    pt="12"
    marginLeft={0}
    className="nav-list"
    display="flex"
    flexDirection="column"
    spacing="4"
  >
    {children}
  </UnorderedList>
);

const NavItem: React.FC<
  React.PropsWithChildren<{
    to: string;
    icon: IconType;
    isLast?: boolean;
    isOpen: boolean;
  }>
> = ({ to, icon, isLast, isOpen, children }) => {
  const location = useLocation();

  const isActive =
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <ListItem
      mb={isLast ? "10" : undefined}
      py="2"
      px="2"
      listStyleType="none"
      pl={isOpen ? "4" : "6"}
      borderLeftWidth={6}
      borderLeftColor={isActive ? "teal.400" : "transparent"}
      bg={isActive ? "blue.600" : undefined}
      color={isActive ? "white" : "gray.400"}
      _hover={{ color: "white", bg: isActive ? "blue.600" : "blue.700" }}
      bottom={isLast ? "0" : undefined}
      css={`
        a {
          display: flex;
          align-items: center;
        }
        margin-top: ${isLast ? "auto" : "inherited"} !important;
      `}
      transition="all 0.3s ease"
    >
      <Link to={to}>
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Flex>
            <NavItemLeftIcon to={to} icon={icon} isOpen={isOpen} />
            <Text
              fontSize="lg"
              opacity={isOpen ? 1 : 0}
              transition="all 0.1s ease"
            >
              {children}
            </Text>
          </Flex>
          <NavItemRightIcon to={to} isActive={isActive} isOpen={isOpen} />
        </Flex>
      </Link>
    </ListItem>
  );
};

const NavItemLeftIcon: React.FC<{
  to: string;
  isOpen: boolean;
  icon: IconType;
}> = ({ to, isOpen, icon }) => {
  const transition = useTransition();

  if (transition.state === "loading" && !isOpen) {
    if (displaySpinner(to, transition)) {
      return <Spinner size="sm" color="teal.500" />;
    }
  }

  return (
    <Icon
      as={icon}
      mr={isOpen ? "4" : "0"}
      fontSize="2xl"
      transition="all 0.2s ease"
    />
  );
};

const NavItemRightIcon: React.FC<{
  to: string;
  isActive: boolean;
  isOpen: boolean;
}> = ({ to, isActive, isOpen }) => {
  const transition = useTransition();

  if (!isOpen) {
    return <></>;
  }

  if (transition.state === "loading") {
    if (displaySpinner(to, transition)) {
      return <Spinner size="sm" color="teal.500" />;
    }
  }

  if (!isActive) {
    return <></>;
  }

  return (
    <Icon
      as={GoPrimitiveDot}
      color="teal.400"
      filter="blur(0.6px)"
      transition="all 0.2s ease"
    />
  );
};

const displaySpinner = (to: string, transition: Transition) => {
  if (to === "/") {
    if (transition.location?.pathname === "/") {
      return true;
    }
  } else {
    if (to !== "/" && transition.location?.pathname.startsWith(to)) {
      return true;
    }
  }
  return false;
};
