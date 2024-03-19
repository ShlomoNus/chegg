//components

import React from 'react';
import ReactDOM from 'react-dom/client';


//providers
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/state/providers/theme';

//pages
import { router } from './pages';

//css
import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
