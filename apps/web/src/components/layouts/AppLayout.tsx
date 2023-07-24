import tw from 'twin.macro';

import { FC, ReactNode } from 'react';
import { Page } from '@/components/layouts/Page';

export interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Page>
      <div css={[tw`relative`]}>
        <main tw="bg-Gray-100">{children}</main>
      </div>
    </Page>
  );
};

export default AppLayout;
