import { genql } from "~/graphql/genql-cli";

export const fetchOneGroup = async ({
  groupid,
  paymentPage,
}: {
  groupid: string;
  paymentPage: number;
}) => {
  const paymentOffset = !paymentPage ? 0 : 10 * (paymentPage - 1);

  return genql.chain.query
    .group_by_pk({ id: groupid })
    .get({
      id: true,
      created_at: true,
      group_name: true,
      group_balance: true,
      user: {
        displayName: true,
      },
      members: {
        id: true,
        user: {
          id: true,
          displayName: true,
        },
      },
      payments: [
        {
          limit: 10,
          offset: paymentOffset,
          order_by: [{ created_at: "desc" }],
        },
        {
          id: true,
          created_at: true,
          amount: true,
          transaction_type: true,
          transaction_status: true,
          member: {
            user: {
              id: true,
              displayName: true,
            },
          },
        },
      ],
      payments_aggregate: {
        aggregate: {
          count: true,
        },
      },
    })
    .then((group) => ({
      ...group,
      members: group!.members.map((m, i) => ({
        ...m,
        index: i + 1,
      })),
      payments: group!.payments.map((p, i) => ({
        ...p,
        index: i + paymentOffset + 1,
      })),
    }));
};
