import { genql } from "~/graphql/genql-cli";

export const fetchGroupPages = async ({
  page,
  search,
}: {
  page?: number;
  search?: string;
}) => {
  const offset = !page ? 0 : 10 * (page - 1);

  const { group: items, group_aggregate } = await genql.query({
    group: [
      {
        offset,
        limit: 10,
        order_by: [{ created_at: "desc" }, { group_name: "asc" }],
        where: {
          group_name: search
            ? {
                _ilike: `%${search}%`,
              }
            : undefined,
          members: {
            id: {
              _is_null: false,
            },
          },
        },
      },
      {
        id: true,
        created_at: true,
        group_name: true,
        user: {
          id: true,
          displayName: true,
        },
        group_balance: true,
        contribution: true,
        recurrency: true,
        recurrency_day: true,
        members_aggregate: {
          aggregate: {
            count: true,
          },
        },
      },
    ],
    group_aggregate: [
      {
        where: {
          members: {
            id: {
              _is_null: false,
            },
          },
        },
      },
      {
        aggregate: {
          count: true,
        },
      },
    ],
  });

  return {
    page,
    count: group_aggregate.aggregate?.count ?? 0,
    items: items.map((g, i) => ({ ...g, index: i + offset + 1 })),
  };
};
