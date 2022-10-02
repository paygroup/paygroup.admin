import { Text, Box, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";

import { Panel } from "~/components-core";

import type { GroupExtended } from "./types";

export const GroupInfo: React.FC<{ group: GroupExtended }> = ({ group }) => (
  <Panel>
    <Box>
      <Heading fontSize="2xl" color="blue.500" fontWeight="light">
        Information
      </Heading>

      <Divider mt="2" mb="6" />

      <VStack alignItems="flex-start" spacing="6">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="flex-start"
          w="100%"
        >
          <Box flex={1}>
            <Text color="primary.500" fontSize="lg">
              group name
            </Text>
            <Text mt="-1" color="gray.500" fontSize="xl">
              {group.group_name}
            </Text>
            <Text color="gray.400" fontSize="xs">
              created on{" "}
              {dayjs(group.created_at!)
                .format("ddd DD MMM, YYYY")
                .toLocaleLowerCase()}
            </Text>
          </Box>

          <Flex
            mt={{ base: "6", lg: "0" }}
            flexDirection="column"
            alignItems={{ base: "flex-start", lg: "flex-end" }}
          >
            <Text color="primary.500" fontSize="lg">
              balance
            </Text>
            <Text mt="-1" color="teal.500" fontSize="xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(group.group_balance ?? 0)}
            </Text>
          </Flex>
        </Flex>

        <Box flex={1}>
          <Text color="primary.500" fontSize="lg">
            owner
          </Text>
          <Text mt="-1" color="gray.500" fontSize="xl">
            {group.user!.displayName}
          </Text>
        </Box>
      </VStack>
    </Box>
  </Panel>
);
