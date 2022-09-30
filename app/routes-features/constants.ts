import type { en_recurrencies_enum } from "~/graphql/genql-sdk";

export const paymentCycles: {
  [name in en_recurrencies_enum]: {
    label: string;
    color: string;
  };
} = {
  Daily: {
    label: "Daily",
    color: "orange.400",
  },
  Weekly: {
    label: "Weekly",
    color: "teal.400",
  },
  Monthly: {
    label: "Monthly",
    color: "blue.400",
  },
};
