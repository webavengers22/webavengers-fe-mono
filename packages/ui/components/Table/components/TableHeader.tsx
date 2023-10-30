import { FC, HTMLAttributes } from 'react';

import { theme } from '../theme';

const TableHeader: FC<HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  return <thead css={theme.tableHeader.base} {...props} />;
};
export default TableHeader;
