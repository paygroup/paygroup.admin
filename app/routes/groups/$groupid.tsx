import { Box, Flex } from "@chakra-ui/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { GroupInfo, GroupMembers, GroupPayments } from "~/features/groups";
import { fetchOneGroup } from "~/features/groups/fetch-one-group";
import type { GroupExtended } from "~/features/groups/types";

export const meta: MetaFunction = () => ({
  title: "paygroup - view group",
});

export const handle = {
  breadcrumb: "view group",
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  return fetchOneGroup({
    groupid: params.groupid!,
    paymentPage: Number(url.searchParams.get("paymentpage") ?? 1),
  });
};

export default function Index() {
  const group = useLoaderData<ReturnType<typeof fetchOneGroup>>();
  return (
    <Flex
      flex={1}
      className="flex-1"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Flex
        className="flex-2"
        flex={{ base: 1, xl: 2 }}
        flexDirection="column"
        mr={{ base: "0", lg: "4" }}
      >
        <GroupInfo group={group as GroupExtended} />
        <GroupMembers group={group as GroupExtended} />
      </Flex>

      <Flex className="flex-3" flex={{ base: 1, xl: 4 }}>
        <Box flex={1} w="100%">
          <GroupPayments group={group as GroupExtended} />
        </Box>
      </Flex>
    </Flex>
  );
}
