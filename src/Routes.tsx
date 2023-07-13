import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const EntryRoomPage = lazy(() => import('@/pages/EntryRoom'));
const DrawingResult = lazy(() => import('@/pages/DrawingResult'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/entryRoom', element: <EntryRoomPage /> },
      { path: '/drawingRoom', element: <DrawingResult /> },
    ],
  },
];

export const pages = [{ route: '/' }];
