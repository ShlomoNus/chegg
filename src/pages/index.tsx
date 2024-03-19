import { createBrowserRouter } from 'react-router-dom';
import { LoginRoute } from './Login';
import { MainRoute } from './Main';
import MainLayout from '@/layouts/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [ MainRoute,LoginRoute],
    },
]);
