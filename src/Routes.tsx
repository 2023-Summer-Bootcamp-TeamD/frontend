import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const GamePage = lazy(() => import('@/pages/Game'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/game',
        element: <GamePage />,
      },
    ],
  },
];

export const pages = [{ route: '/' }];
