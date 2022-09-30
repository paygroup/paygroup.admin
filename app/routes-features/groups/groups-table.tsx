import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Badge,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import dayjs from "dayjs";

import { paymentCycles } from "../constants";
import type { GroupTableProps } from "./types";

export const GroupsTable: React.FC<GroupTableProps> = ({ items }) => (
  <TableContainer>
    <Table variant="striped" colorScheme="blueGray">
      <Thead>
        <Tr>
          <Th w="1%">#</Th>
          <Th w="20%">group name</Th>
          <Th w="20%">created at</Th>
          <Th w="20%">owner</Th>
          <Th w="10%">balance</Th>
          <Th w="10%">contribution</Th>
          <Th w="10%">recurrency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map((row, i) => (
          <Tr key={i}>
            <Td>{row.index}</Td>

            <Td w="20%" color="blue.500">
              <Link to={`/groups/${row.id}`}>{row.group_name}</Link>
            </Td>

            <Td w="20%">{dayjs(row.created_at).format("ddd DD MMM, YYYY")}</Td>

            <Td w="20%" color="blue.500">
              <Link to={`/users/${row.user.id}`}>{row.user.displayName}</Link>
            </Td>

            <Td w="10%">
              <Text>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(row.group_balance ?? 0)}
              </Text>
            </Td>

            <Td w="10%">
              <Text>
                {row.contribution
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(row.contribution)
                  : undefined}
              </Text>
            </Td>

            <Td w="10%">
              <Badge
                w="16"
                textTransform="none"
                textAlign="center"
                borderRadius={6}
                bg={
                  row.recurrency
                    ? paymentCycles[row.recurrency].color
                    : undefined
                }
              >
                <Text color="white">
                  {row.recurrency
                    ? paymentCycles[row.recurrency].label
                    : undefined}
                </Text>
              </Badge>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
