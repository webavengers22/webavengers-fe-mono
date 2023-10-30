import 'twin.macro';

import { Children, FC, TdHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Tooltip } from '../../Tooltip';
import { theme } from '../theme';

const TableBodyCell: FC<TdHTMLAttributes<HTMLTableDataCellElement>> = ({ children, ...rest }) => {
  const divElemRef = useRef<HTMLDivElement>(null);

  const [hasEllipsis, setHasEllipsis] = useState(false);

  const childrenText = Children.toArray(children)
    .filter((child) => child)
    .at(0);

  useEffect(() => {
    const element = divElemRef?.current;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const elem = entry.target;
      const { scrollWidth, clientWidth } = elem as any;

      if (scrollWidth > clientWidth) setHasEllipsis(true);
      else setHasEllipsis(false);
    });

    if (element) observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <td css={theme.tableBodyCell.base} {...rest}>
      <div ref={divElemRef} tw="px-2 truncate">
        {hasEllipsis ? <Tooltip contents={childrenText}>{children}</Tooltip> : children}
      </div>
    </td>
  );
};

export default TableBodyCell;
