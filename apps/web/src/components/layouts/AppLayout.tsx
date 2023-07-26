import tw from 'twin.macro';

import { Router, useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import TreeModel from 'tree-model';
import { Page } from '@/components/layouts/Page';
import { Header } from '@/components/layouts/Header';
import useMenuStore from '@/store/useMenuStore';
import useLayoutStore from '@/store/useLayoutStore';
import MENU_LIST from '@/constants/menu.constants';

export interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const setCollapsed = useLayoutStore((state) => state.setCollapsed);
  const setMenu = useMenuStore((state) => state.setMenu);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  /**
   * 페이지 전환시 로딩 처리
   */
  useEffect(() => {
    const onChangeRouterStart = () => setLoading(true);
    const onChangeRouterEnd = () => {
      setLoading(false);
      setCollapsed(true);
    };

    Router.events.on('routeChangeStart', onChangeRouterStart);
    Router.events.on('routeChangeComplete', onChangeRouterEnd);
    Router.events.on('routeChangeError', onChangeRouterEnd);
    return () => {
      Router.events.off('routeChangeStart', onChangeRouterStart);
      Router.events.off('routeChangeComplete', onChangeRouterEnd);
      Router.events.off('routeChangeError', onChangeRouterEnd);
    };
  }, [setCollapsed]);

  /** get menu 데이터*/
  const root = useMemo(() => {
    const tree = new TreeModel();
    return tree.parse({
      id: 'root',
      children: MENU_LIST as any,
    });
  }, []);

  const currentPageNode = useMemo(
    () => root.first((node) => node.model.id === router.pathname),
    [root, router.pathname],
  );

  useEffect(() => {
    setMenu({
      oneDepthMenu: root.all((node) => node.getPath().length === 2).map((node) => node.model),
      twoDepthMenu: currentPageNode?.getPath()[1].model.children,
    });
  }, [currentPageNode, root, setMenu]);

  return (
    <Page>
      <Header />
      <main css={[tw`bg-Gray-100 pt-[3.375rem]`]}>{children}</main>
    </Page>
  );
};

export default AppLayout;
