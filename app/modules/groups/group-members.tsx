import {
  Divider,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";

import { Panel } from "~/components";

import type { GroupExtended } from "./types";

export const GroupMembers: React.FC<{ group: GroupExtended }> = ({ group }) => (
  <Panel mt="4">
    <Heading fontSize="2xl" color="blue.500" fontWeight="light">
      Members
    </Heading>
    <Divider mt="2" mb="2" />
    <Table>
      <Thead>
        <Tr>
          <Th p={0}>#</Th>
          <Th>member name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {group.members.map((m) => (
          <Tr key={m.id}>
            <Td p={0} w="5%">
              {m.index}
            </Td>
            <Td color="blue.500">
              <Link to={`/users/${m.user.id}`}>{m.user.displayName}</Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Panel>
);
