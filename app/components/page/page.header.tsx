import React from "react";

import {
  Flex,
  IconButton,
  Icon,
  Input,
  Heading,
  Box,
  Badge,
  Fade,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";

import { PageBreadcrumbs } from "./page.breadcrumbs";

export const PageHeader: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <Box className="page-header" p="3" pr="6" w="100%">
    <Flex flexDirection="row" alignItems="center" flex={1}>
      <ToggleNavButton isOpen={isOpen} onToggle={onToggle} />
      <Input ml={["0", "4"]} flex={1} placeholder="Search..." />
      <Flex
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        flex={[0, 1]}
        display={{ base: "none", md: "flex" }}
      >
        <Box mt="4" mr="4" position="relative">
          <Icon as={MdNotifications} color="gray.500" fontSize="3xl" />
          <Badge
            rounded="lg"
            position="absolute"
            right="-2"
            bg="orange.500"
            color="white"
          >
            12
          </Badge>
        </Box>
        <Heading color="blue.600" mr="2" fontSize="3xl">
          paygroup
        </Heading>
        <Heading color="teal.500" fontSize="3xl">
          admin
        </Heading>
      </Flex>
    </Flex>
    <Flex mt="1" flexDirection="row" alignItems="center" flex={1}>
      <Box w={isOpen ? "14" : "4"} />
      <Fade in>
        <PageBreadcrumbs />
      </Fade>
    </Flex>
  </Box>
);

const ToggleNavButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <IconButton
    onClick={onToggle}
    aria-label="toggle sidebar"
    variant="ghost"
    colorScheme="blue"
    borderRadius={8}
    opacity={isOpen ? 1 : 0}
    position={isOpen ? "relative" : "absolute"}
    transition="all 0.3s ease"
    icon={
      <Icon
        as={FiMenu}
        color={isOpen ? "blue.500" : "gray.300"}
        fontSize="xl"
        fontWeight="lg"
        transition="all 0.3s ease"
      />
    }
  />
);
