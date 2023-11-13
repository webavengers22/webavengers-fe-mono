import 'twin.macro';

import { Children, FC } from 'react';

import { Icon } from 'icons';
import { usePagination } from 'utils';

import PageButtonItem from './components/PageButtonItem';
import PageNumberItem from './components/PageNumberItem';
import tw from 'twin.macro';

export interface PaginationProps {
  currentPage?: number;
  itemsPerPage?: number;
  totalPage?: number;
  onChangePage?: (page: number) => void;
  isMovePageBtn?: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage = 1,
  itemsPerPage = 10,
  totalPage = 1,
  onChangePage,
  isMovePageBtn = false,
}) => {
  const { currentItems, forwardValue, backwoardValue, canPreviousPage, canNextPage } =
    usePagination({
      currentPage,
      itemsPerPage,
      totalPage,
    });

  return (
    <div tw="flex items-center justify-center gap-3">
      <PageButtonItem
        css={[tw`text-Gray-500`]}
        aria-label="이전 페이지로 이동"
        aria-disabled={!canPreviousPage}
        value={forwardValue}
        onClick={onChangePage}
        disabled={!canPreviousPage}
      >
        <Icon name={'CaretLeft'} color={'transparent'} size={24} solid />
      </PageButtonItem>

      {isMovePageBtn && (
        <PageButtonItem
          aria-label="첫 페이지로 이동"
          aria-disabled={!canPreviousPage}
          value={1}
          onClick={onChangePage}
          disabled={!canPreviousPage}
        >
          첫 페이지
        </PageButtonItem>
      )}

      <ul tw="flex gap-1">
        {Children.toArray(
          currentItems.map((value) => (
            <PageNumberItem
              isSelected={value === currentPage}
              value={value}
              onClick={onChangePage}
            />
          )),
        )}
      </ul>

      {isMovePageBtn && (
        <PageButtonItem
          aria-label="마지막 페이지로 이동"
          aria-disabled={!canNextPage}
          value={totalPage}
          onClick={onChangePage}
          disabled={!canNextPage}
        >
          마지막 페이지
        </PageButtonItem>
      )}
      <PageButtonItem
        css={[tw`text-Gray-500`]}
        aria-label="다음 페이지로 이동"
        aria-disabled={!canNextPage}
        value={backwoardValue}
        onClick={onChangePage}
        disabled={!canNextPage}
      >
        <Icon name={'CaretRight'} color={'transparent'} size={24} solid />
      </PageButtonItem>
    </div>
  );
};
