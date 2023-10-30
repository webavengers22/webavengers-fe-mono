import tw, { css } from 'twin.macro';

export const theme = {
  tableWrapper: {
    base: [
      tw`w-full`,
      css`
        .es-table,
        .es-table-container,
        .es-table-content {
          ${tw`h-full`}
        }

        table {
          tr {
            ${tw`h-[60px] max-h-[60px]`}
          }
          tbody {
            ${tw`text-bd1-r text-black`}
          }
        }
      `,
    ],
  },
  table: {
    base: tw`w-full h-full`,
  },
  tableHeader: {
    base: tw`text-left border-t border-t-Gray-500 bg-Gray-500 border-b border-b-Gray-300`,
  },
  tableHeaderCell: {
    base: [tw`text-bd1-b text-black`, tw`px-1 py-0`],
  },
  tableBody: {
    base: [],
  },
  tableBodyRow: {
    base: [tw`transition-colors duration-200 border-b border-b-Gray-300`],
    hover: tw``,
  },
  tableBodyCell: {
    base: [tw`text-bd1-r text-black`],
  },
};
