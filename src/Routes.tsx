import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const EntryRoomPage = lazy(() => import('@/pages/EntryRoom'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/entryRoom', element: <EntryRoomPage /> },
    ],
  },
];

export const pages = [{ route: '/' }];
