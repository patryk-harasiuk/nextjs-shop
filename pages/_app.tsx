import 'tailwindcss/tailwind.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CartProvider } from 'features/cart/context/cart-context';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <SessionProvider session={pageProps.session}>
        <Hydrate state={pageProps.dehydratedState}>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </Hydrate>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
