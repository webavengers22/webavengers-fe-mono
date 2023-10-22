import tw from 'twin.macro';

import { Router, useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import TreeModel from 'tree-model';
import { Page } from '@/components/layouts/Page';
import { Header } from '@/components/layouts/Header';
import useMenuStore from '@/store/useMenuStore';
import useLayoutStore from '@/store/useLayoutStore';
import MENU_LIST from '@/constants/menu.constants';
import { ScrollArea } from 'ui';
import { Footer } from '@/components/layouts/Footer';

export interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const setCollapsed = useLayoutStore((state) => state.setCollapsed);
  const setMenu = useMenuStore((state) => state.setMenu);
  const router = useRouter();

  const [_, setLoading] = useState(false);

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
      <div
        css={[
          tw`relative w-full h-full`,
          tw`flex-grow`,
          tw`pt-[3.375rem]`,
          tw`xl:max-w-[64rem] lg:max-w-[64rem] md:max-w-[48rem] sm:max-w-[48rem]`,
        ]}
      >
        <main tw={'w-full h-full'}>{children}</main>
      </div>
      <Footer />
    </Page>
  );
};

export default AppLayout;
