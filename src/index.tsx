import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';
import { SnackbarProvider } from 'notistack';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      /*cacheTime: 5000,
      staleTime: 5000,
      retry: 1,*/
    },
    mutations: {
      retry: 1
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
        <App />
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
