import { FC, HTMLAttributes } from 'react';

import { theme } from '../theme';

const TableBody: FC<HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  return <tbody css={theme.tableBody.base} {...props} />;
};
export default TableBody;
