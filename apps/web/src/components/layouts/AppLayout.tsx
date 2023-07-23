import tw from 'twin.macro';

import { FC, ReactNode } from 'react';

export interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div> app start</div>;
};

export default AppLayout;
