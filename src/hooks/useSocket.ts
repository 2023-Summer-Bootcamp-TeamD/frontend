// useSocket.ts
import { useEffect, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';

export type SocketState = {
  socket: Socket | null;
  isConnected: boolean;
};

const useSocket = (url: string): SocketState => {
  const [socketState, setSocketState] = useState<SocketState>({
    socket: null,
    isConnected: false,
  });

  useEffect(() => {
    const newSocket = socketIOClient(url, { transports: ['websocket'] });
    newSocket.on('connect', () => {
      console.log('Socket.IO 연결 성공!');
      setSocketState({ socket: newSocket, isConnected: true });
    });
    newSocket.on('connect_error', (error: Error) => {
      console.error('Socket.IO 연결 오류: ', error);
    });
    newSocket.on('disconnect', () => {
      console.log('Socket.IO 연결 종료');
      setSocketState({ socket: null, isConnected: false });
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      newSocket.disconnect();
    };
  }, [url]);

  return socketState;
};

export default useSocket;
