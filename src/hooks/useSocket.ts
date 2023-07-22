import { useEffect, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
const useSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const newSocket = socketIOClient(url);
    newSocket.on('connect', () => {
      console.log('Socket.IO 연결 성공!');
      setIsConnected(true);
      setSocket(newSocket); // Socket.IO 클라이언트 인스턴스를 socket 상태로 설정
    });
    newSocket.on('connect_error', (error: Error) => {
      console.error('Socket.IO 연결 오류: ', error);
    });
    newSocket.on('disconnect', () => {
      console.log('Socket.IO 연결 종료');
      setIsConnected(false);
    });
    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      newSocket.disconnect();
    };
  }, [url]);
  return { socket, isConnected };
};
export default useSocket;
