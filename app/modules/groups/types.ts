import type { fetchGroupPages } from "./fetch-group-pages";
import type { fetchOneGroup } from "./fetch-one-group";

export type GroupTableProps = {
  items: Awaited<ReturnType<typeof fetchGroupPages>>["items"];
};

export type GroupExtended = Awaited<ReturnType<typeof fetchOneGroup>>;
