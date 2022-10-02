import type { en_statuses_enum } from "~/graphql/genql-sdk";

export const paymentStatuses: { [name in en_statuses_enum]: string } = {
  Pending: "Pending",
  Cancelled: "Cancelled",
  Completed: "Completed",
  Failed: "Failed",
  Processing: "Processing",
  Rejected: "Rejected",
};
