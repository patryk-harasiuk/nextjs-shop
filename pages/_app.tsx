import 'tailwindcss/tailwind.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <SessionProvider session={pageProps.session}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
