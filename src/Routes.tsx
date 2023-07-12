import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const CreatingSpecificRooms = lazy(
  () => import('@/pages/CreatingSpecificRooms'),
);
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/creatingspecificrooms', element: <CreatingSpecificRooms /> },
    ],
  },
];

export const pages = [{ route: '/' }];
