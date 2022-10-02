import { Divider, Heading, HStack } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "@remix-run/react";

import { Panel } from "~/components/core";
import { Pagination, usePagination } from "~/components/modules";

import type { fetchGroupPages } from "./fetch-group-pages";
import { GroupsTable } from "./groups-table";
import type { GroupTableProps } from "./types";

export const GroupListingPage = () => {
  const {
    items,
    count,
    page = 0,
  } = useLoaderData<ReturnType<typeof fetchGroupPages>>();
  const navigate = useNavigate();
  const paging = usePagination({
    data: { items, count },
    page,
    onPage: (page) => {
      navigate(`/groups?page=${page}`);
    },
  });

  return (
    <Panel>
      <HStack alignItems="center">
        <Heading flex={1} fontSize="2xl" color="gray.600">
          Groups
        </Heading>
        <Pagination
          {...paging}
          page={page}
          onChange={(page) => {
            navigate(`/groups?page=${page}`);
          }}
          goNext={paging.increasePage}
          goPrev={paging.decreasePage}
        />
      </HStack>

      <Divider mt="3" mb="2" />
      <GroupsTable items={items as GroupTableProps["items"]} />
    </Panel>
  );
};
