export type FocusStatus = "idle" | "focus-in" | "focus-out";

export type UsePaginationProps<T> = {
  pageSize?: number;
  page: number;
  onPage: (page: number) => void;
  data: {
    count: number;
    items: T[];
  };
};

export type PaginationProps = {
  showing: boolean;
  itemCount: number;
  pageCount: number;
  displayIndex: number;
  onChange: (e: unknown) => void;
  onFocus: (e: unknown) => void;
  onBlur: (e: unknown, returnKeyPressed?: boolean) => void;
  next: boolean;
  prev: boolean;
  goNext: () => void;
  goPrev: () => void;
};

export type PageButtonProps = {
  icon: string;
  click: () => void;
  enabled: boolean;
  className?: string;
};

export type PaginationInput = {
  limit?: number;
  offset: number;
};

export type PaginationResult<T> = {
  count: number;
  nodes: T[];
};

type QueryFnArgs = { limit: number; offset: number };
export type QueryFn<T> = (args: QueryFnArgs) => Promise<PaginationResult<T>>;

export type MakeCountable<T> = T & {
  index: number;
};
