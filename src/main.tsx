import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import { worker } from './mocks/worker';
import { SocketProvider } from './context/SocketContext';
import { RecoilRoot } from 'recoil';

// if (import.meta.env.DEV) {
//   worker.start();
// }
const socketUrl = 'http://localhost:8080';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <SocketProvider url={socketUrl}>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </RecoilRoot>,
);
