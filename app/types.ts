import type { IconType } from "react-icons";

export type SitemapItem = {
  to: string;
  title: string;
  icon: IconType;
};

export type Sitemap = SitemapItem[];

export type ENVIRONMENT =
  | "GRAPHQL_URL"
  | "NHOST_URL"
  | "HASURA_ADMIN"
  | "SERVER_API"
  | "HASURA_SCHEDULE_URL"
  | "UBPAY_MERCHANT_ID"
  | "UBPAY_REQUEST_URL"
  | "UBPAY_WITHDRAW_URL"
  | "UBPAY_WITHDRAW_AUTHORIZATION"
  | "UBPAY_WITHDRAW_SENDER_PHONE"
  | "UBPAY_BALANCE_URL";
