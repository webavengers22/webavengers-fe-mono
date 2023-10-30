import { FC, TableHTMLAttributes } from 'react';

import { theme } from '../theme';

const TableContainer: FC<TableHTMLAttributes<HTMLTableElement>> = (props) => {
  return <table css={theme.table.base} {...props} />;
};

export default TableContainer;
