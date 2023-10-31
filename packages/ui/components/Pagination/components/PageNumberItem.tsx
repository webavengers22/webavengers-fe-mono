import 'twin.macro';

import { FC } from 'react';

import { theme } from '../theme';

interface PageNumberItemProps {
  isSelected?: boolean;
  value: number;
  onClick?: (page: number) => void;
}

const PageNumberItem: FC<PageNumberItemProps> = ({ isSelected = false, value, onClick }) => {
  return (
    <li>
      <button
        css={[
          theme.item.base,
          isSelected ? [theme.item.selected, theme.item.selectedHover] : theme.item.hover,
        ]}
        onClick={() => onClick?.(value)}
      >
        {value}
      </button>
    </li>
  );
};

export default PageNumberItem;
