import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';
import { Alert } from 'ui';
import AppLayout from '@/components/layouts/AppLayout';
import { ALERT_MESSAGE } from '@/constants/alert.constants';
import { useAlert } from '@/hooks/useAlert';
import fetcher from '@/libs/utils/fetcher';
import GlobalStyles from '@/styles/GlobalStyles';

/* timezone 세팅 */
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen, onOpen, onClose, message, setMessage } = useAlert();

  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
        keepPreviousData: false,
        fetcher,
        onSuccess: () => {
          onClose();
          setMessage(null);
        },
        onError: () => {
          onOpen();
          setMessage(ALERT_MESSAGE.FETCH_FAIL);
        },
      }}
    >
      <GlobalStyles />

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <Alert isOpen={isOpen} onClose={onClose}>
        {message}
      </Alert>
    </SWRConfig>
  );
}
