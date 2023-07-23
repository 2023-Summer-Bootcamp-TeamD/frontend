// SocketContext.tsx
import React, { createContext, useContext } from 'react';
import useSocket, { SocketState } from '../hooks/useSocket'; // useSocket 훅을 가져옵니다.

interface SocketContextType {
  socketState: SocketState;
}

const SocketContext = createContext<SocketContextType | null>(null);

export function useSocketContext() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocketContext must be used within a SocketProvider');
  }
  return context;
}

export function SocketProvider({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const socketState = useSocket(url);

  return (
    <SocketContext.Provider value={{ socketState }}>
      {children}
    </SocketContext.Provider>
  );
}
