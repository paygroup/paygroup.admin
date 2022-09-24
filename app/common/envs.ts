import type { ENVIRONMENT } from "~/types";

export const getEnv = (env: ENVIRONMENT) =>
  envs.isLocal ? envs.local[env] : envs.remote[env];

const envs = {
  isLocal: Boolean(process.env.LOCAL) === true,

  local: {
    GRAPHQL_URL: process.env.LOCAL_GRAPHQL_URL,
    NHOST_URL: process.env.LOCAL_NHOST_URL,
    HASURA_ADMIN: process.env.LOCAL_HASURA_ADMIN,
    SERVER_API: process.env.LOCAL_SERVER_API,
    HASURA_SCHEDULE_URL: process.env.LOCAL_HASURA_SCHEDULE_URL,

    UBPAY_MERCHANT_ID: process.env.UBPAY_MERCHANT_ID,
    UBPAY_REQUEST_URL: process.env.UBPAY_REQUEST_URL,
    UBPAY_WITHDRAW_URL: process.env.UBPAY_WITHDRAW_URL,
    UBPAY_WITHDRAW_AUTHORIZATION: process.env.UBPAY_WITHDRAW_AUTHORIZATION,
    UBPAY_WITHDRAW_SENDER_PHONE: process.env.UBPAY_WITHDRAW_SENDER_PHONE,
    UBPAY_BALANCE_URL: process.env.UBPAY_BALANCE_URL,
  },

  remote: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    NHOST_URL: process.env.NHOST_URL,
    HASURA_ADMIN: process.env.HASURA_ADMIN,
    SERVER_API: process.env.SERVER_API,
    HASURA_SCHEDULE_URL: process.env.HASURA_SCHEDULE_URL,

    UBPAY_MERCHANT_ID: process.env.UBPAY_MERCHANT_ID,
    UBPAY_REQUEST_URL: process.env.UBPAY_REQUEST_URL,
    UBPAY_WITHDRAW_URL: process.env.UBPAY_WITHDRAW_URL,
    UBPAY_WITHDRAW_AUTHORIZATION: process.env.UBPAY_WITHDRAW_AUTHORIZATION,
    UBPAY_WITHDRAW_SENDER_PHONE: process.env.UBPAY_WITHDRAW_SENDER_PHONE,
    UBPAY_BALANCE_URL: process.env.UBPAY_BALANCE_URL,
  },
};
