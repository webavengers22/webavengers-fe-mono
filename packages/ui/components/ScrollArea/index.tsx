import React, { HTMLAttributes } from 'react';

import { theme } from './theme';

export const ScrollArea = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...rest }, ref) => (
    <div ref={ref} className={className} css={[theme.base, theme.hover]} {...rest}>
      {children}
    </div>
  ),
);
