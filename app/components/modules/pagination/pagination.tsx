/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  IconButton,
  Select,
} from "@chakra-ui/react";
import type { StringOrNumber } from "@chakra-ui/utils";
import throttle from "lodash/throttle";

import type { UsePaginationProps } from "./types";

export const TAKE = 10;

const Span: React.FC<React.PropsWithChildren<any>> = ({ children }) => (
  <Box mr="2" className="span">
    {children}
  </Box>
);

export function usePagination<T>({
  pageSize = TAKE,
  page,
  onPage,
  data,
}: UsePaginationProps<T>) {
  const itemCount = data?.count ?? 0;
  const pageCount = Math.ceil(itemCount / pageSize);

  const calcShowing = () => {
    let showing = pageSize * Number(page);
    if (showing > itemCount) {
      showing = itemCount;
    }
    return showing;
  };

  const increasePage = () => onPage?.(Number(page) + 1);
  const decreasePage = () => onPage?.(Number(page) - 1);

  return {
    itemCount,
    pageCount,
    data,
    prev: page > 1,
    next: page < pageCount,
    showing: calcShowing(),
    increasePage,
    decreasePage,
  };
}

type PaginationProps = {
  showing: number;
  itemCount: number;
  pageCount: number;
  page: StringOrNumber;
  onChange: (page?: StringOrNumber) => void;
  next: boolean;
  prev: boolean;
  goNext: () => void;
  goPrev: () => void;
};
export const Pagination = ({
  showing,
  itemCount,
  pageCount,
  page,
  prev,
  next,
  onChange,
  goNext,
  goPrev,
}: PaginationProps) => (
  <Flex alignItems="center" color="gray.500" className="pagination">
    <Span>showing</Span>
    <Span>{showing}</Span>
    <Span>of</Span>
    <Span>{itemCount}</Span>
    <Span>{itemCount > 1 ? "records" : "record"}</Span>
    <IconButton
      onClick={prev ? goPrev : undefined}
      ml="2"
      aria-label="previous page"
      colorScheme={prev ? "blue" : undefined}
      size="sm"
      opacity={0.8}
      icon={<ChevronLeftIcon fontSize="2xl" />}
    />
    <IconButton
      onClick={next ? goNext : undefined}
      ml="1"
      mr="2"
      aria-label="next page"
      colorScheme={next ? "blue" : undefined}
      size="sm"
      opacity={0.8}
      icon={<ChevronRightIcon fontSize="2xl" />}
    />
    <PageInput page={page} pageCount={pageCount} onChange={onChange} />
    <Span>of</Span>
    <Span>{pageCount}</Span>
    <Span>{pageCount > 1 ? "pages" : "page"}</Span>
    <Select display="none" ml="2" defaultValue={10}>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </Select>
  </Flex>
);

type PageInputProps = {
  page: StringOrNumber;
  pageCount: number;
  onChange: (index?: StringOrNumber) => void;
};
const PageInput = ({ page, pageCount, onChange }: PageInputProps) => {
  const [pageValue, setPageValue] = useState<StringOrNumber>(page ?? 0);
  const [previousValue, setPreviousValue] = useState<StringOrNumber>(page);
  const setPageValueThrottle = useCallback(
    throttle((val: StringOrNumber) => setPageValue(val), 1000),
    []
  );

  const invalidNum = (num: StringOrNumber) =>
    typeof num !== "number" ||
    isNaN(num as number) ||
    (Number(num) === 0 && pageCount > 0);
  const emptyString = (str: string) => !str.length;

  const handleChange = (str: string, value: number) => {
    if (emptyString(str)) {
      setPreviousValue(page);
      setPageValue(str);
    } else {
      if (invalidNum(value)) {
        return;
      }
      if (value < 0 || value > pageCount) {
        return;
      }
      setPageValueThrottle(value);
    }
  };

  const handleBlur = () => {
    if (invalidNum(pageValue)) {
      setPageValue(previousValue);
    } else {
      onChange?.(pageValue);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      onChange?.(pageValue);
    }
  };

  useEffect(() => {
    if (page !== pageValue) {
      setPageValue(page);
    }
  }, [page]);

  return (
    <NumberInput
      className="pagination-input"
      name="page"
      width={["16"]}
      mr="2"
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={pageCount ? pageValue : 0}
    >
      <NumberInputField readOnly={!pageCount} />
    </NumberInput>
  );
};
