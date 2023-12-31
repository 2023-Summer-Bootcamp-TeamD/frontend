import React, { lazy } from 'react';
import GlobalLayout from '@/pages/_layout';
const MainPage = lazy(() => import('@/pages/Main'));
const CreatingSpecificRoomPage = lazy(
  () => import('@/pages/CreatingSpecificRooms'),
);
const EntryRoomPage = lazy(() => import('@/pages/EntryRoom'));
const DrawingResultPage = lazy(() => import('@/pages/DrawingResult'));
const GamePage = lazy(() => import('@/pages/Game'));
const GameResultPage = lazy(() => import('@/pages/GameResult'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/creatingSpecificRooms', element: <CreatingSpecificRoomPage /> },
      { path: '/entryRoom', element: <EntryRoomPage /> },
      { path: '/drawingRoom', element: <DrawingResultPage /> },
      {
        path: '/game/:UUID',
        element: <GamePage />,
      },
      { path: '/result', element: <GameResultPage /> },
    ],
  },
];

export const pages = [{ route: '/' }];
