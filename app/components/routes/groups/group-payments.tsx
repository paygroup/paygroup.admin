import React from "react";

import {
  Text,
  Divider,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import dayjs from "dayjs";
import query from "query-string";
import { FaCoins } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";

import { Panel } from "~/components-core";
import type { en_statuses_enum } from "~/graphql/genql-sdk";
import { Pagination, usePagination } from "~/components/modules/components-modules/pagination";

import type { GroupExtended } from "./types";

// http://localhost:3000/groups?page=2
export const GroupPayments: React.FC<{ group: GroupExtended }> = ({
  group,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = query.parse(location.search);

  const page = !group.payments.length
    ? 0
    : isNaN(params.paymentpage as any)
    ? 1
    : Number(params.paymentpage);

  const paging = usePagination({
    data: {
      items: group.payments,
      count: group.payments_aggregate?.aggregate?.count ?? 0,
    },
    page,
    onPage: (page) => {
      navigate(`/groups/${group.id}?paymentpage=${page}`);
    },
  });

  return (
    <Panel>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize="2xl" color="blue.500" fontWeight="light">
          Payments
        </Heading>

        <Pagination
          {...paging}
          page={page}
          onChange={(page) => {
            navigate(`/groups/${group.id}?paymentpage=${page}`);
          }}
          goNext={paging.increasePage}
          goPrev={paging.decreasePage}
        />
      </Flex>

      <Divider mt="2" mb="2" />

      <Table variant="striped" colorScheme="blueGray" fontSize="md">
        <Thead>
          <Tr textTransform="none">
            <Th>#</Th>
            <Th>amount</Th>
            <Th>member</Th>
            <Th>type</Th>
            <Th>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {group.payments.map((p) => (
            <Tr key={p.id}>
              <Td w="5%" valign="top">
                {p.index}
              </Td>
              <Td valign="top">
                <Text
                  fontSize="md"
                  color={
                    p.transaction_status === "Pending"
                      ? "yellow.500"
                      : p.transaction_status === "Completed"
                      ? "teal.500"
                      : "orange.500"
                  }
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(p.amount ?? 0)}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  {dayjs(p.created_at)
                    .format("ddd DD MMM, YYYY, HH:mm")
                    .toLocaleLowerCase()}
                </Text>
              </Td>

              <Td color="blue.500">
                <Link to={`/users/${p.member.user.id}`}>
                  {p.member.user.displayName}
                </Link>
              </Td>

              <Td>
                <Flex alignItems="center">
                  <Icon
                    mr="2"
                    as={p.transaction_type === "MoneyIn" ? FaCoins : GoArrowUp}
                    fontSize="xl"
                    color={`${
                      p.transaction_type === "MoneyIn" ? "teal" : "orange"
                    }.500`}
                  />
                  <Text
                    color={`${
                      p.transaction_type === "MoneyIn" ? "teal" : "orange"
                    }.500`}
                  >
                    {p.transaction_type === "MoneyIn" ? "deposit" : "withdraw"}
                  </Text>
                </Flex>
              </Td>

              <Td>
                <Badge
                  w="24"
                  variant="outline"
                  colorScheme={statuses[p.transaction_status].color}
                  textTransform="none"
                  textAlign="center"
                  borderRadius={6}
                >
                  {statuses[p.transaction_status].label?.toLocaleLowerCase()}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Panel>
  );
};

const statuses: {
  [name in en_statuses_enum]: {
    label?: string;
    color?: string;
  };
} = {
  Pending: {
    label: "Pending",
    color: "yellow",
  },
  Cancelled: {
    label: "Cancelled",
    color: "orange",
  },
  Completed: {
    label: "Completed",
    color: "teal",
  },
  Failed: {
    label: "Failed",
    color: "orange",
  },
  Processing: {
    label: "Processing",
    color: "blue",
  },
  Rejected: {
    label: "Rejected",
    color: "orange",
  },
};
