import { FC, ThHTMLAttributes } from 'react';

import { theme } from '../theme';

const TableHeaderCell: FC<ThHTMLAttributes<HTMLTableHeaderCellElement>> = (props) => {
  return <th css={theme.tableHeaderCell.base} {...props} />;
};

export default TableHeaderCell;
