import { useCallback, useEffect, useMemo, useState } from 'react';

interface UsePaginationArgs {
  currentPage?: number;
  itemsPerPage: number;
  totalPage: number;
  onChangePage?: (page: number) => void;
}

export const usePagination = ({
  currentPage = 1,
  itemsPerPage,
  totalPage,
  onChangePage,
}: UsePaginationArgs) => {
  // {Math.min(1 + (page - 1) * itemsPerPage, itemsPerPage)}-
  //         {Math.min(page * itemsPerPage, rowsLength)}
  const [currentItems, setCurrentItems] = useState<number[]>([]);

  const forwardValue = useMemo(
    () => Math.max((currentItems.at(0) ?? 1) - itemsPerPage, 1),
    [currentItems, itemsPerPage],
  );

  const backwoardValue = useMemo(
    () => Math.min((currentItems.at(0) ?? 1) + itemsPerPage, totalPage),
    [currentItems, itemsPerPage, totalPage],
  );

  const canPreviousPage = useMemo(() => currentPage !== 1, [currentPage]);

  const canNextPage = useMemo(() => currentPage < totalPage, [currentPage, totalPage]);

  const firstPage = useCallback(() => onChangePage?.(1), [onChangePage]);

  const lastPage = useCallback(() => onChangePage?.(totalPage), [onChangePage, totalPage]);

  const previousPage = useCallback(() => {
    if (canPreviousPage) {
      onChangePage?.(currentPage - 1);
    }
  }, [canPreviousPage, currentPage, onChangePage]);

  const nextPage = useCallback(() => {
    if (canNextPage) {
      onChangePage?.(currentPage + 1);
    }
  }, [canNextPage, currentPage, onChangePage]);

  useEffect(() => {
    const startIndex = Math.trunc((currentPage - 1) / itemsPerPage) * itemsPerPage + 1;
    setCurrentItems(
      [...Array(itemsPerPage)].map((_, i) => startIndex + i).filter((item) => item <= totalPage),
    );
  }, [currentPage, itemsPerPage, totalPage]);

  return {
    forwardValue,
    backwoardValue,
    currentItems,
    canPreviousPage,
    canNextPage,
    firstPage,
    lastPage,
    previousPage,
    nextPage,
  };
};
