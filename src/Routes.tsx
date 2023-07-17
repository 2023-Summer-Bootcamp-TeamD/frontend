import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const CreatingSpecificRooms = lazy(
  () => import('@/pages/CreatingSpecificRooms'),
);
const EntryRoomPage = lazy(() => import('@/pages/EntryRoom'));
const DrawingResult = lazy(() => import('@/pages/DrawingResult'));
const GamePage = lazy(() => import('@/pages/Game'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/creatingspecificrooms', element: <CreatingSpecificRooms /> },
      { path: '/entryRoom', element: <EntryRoomPage /> },
      { path: '/drawingroom', element: <DrawingResult /> },
      {
        path: '/game',
        element: <GamePage />,
      },
    ],
  },
];

export const pages = [{ route: '/' }];
