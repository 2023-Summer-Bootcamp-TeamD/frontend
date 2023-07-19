import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '@/components/SkeletonUI';

export default function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}
