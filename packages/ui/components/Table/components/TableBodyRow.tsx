import { FC, HTMLAttributes } from 'react';

import { theme } from '../theme';

const TableBodyRow: FC<HTMLAttributes<HTMLTableRowElement>> = (props) => {
  const isNotEmpty = props.className !== 'es-table-placeholder';
  return <tr css={[theme.tableBodyRow.base, isNotEmpty && theme.tableBodyRow.hover]} {...props} />;
};

export default TableBodyRow;
