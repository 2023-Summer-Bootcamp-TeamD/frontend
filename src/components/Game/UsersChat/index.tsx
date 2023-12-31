import React, { useState } from 'react';
import { styled } from 'styled-components';
import Title from './title';
import MessageView from './messageView';
import ChatInputView from './chatInputView';
import { messageType } from '@/types/chatRoom';
import { messages } from '@/constants/chatList';
import { useRecoilValue } from 'recoil';
import { nicknameState } from '@/atom/game';

const UsersChat = ({ drawer }: { drawer: string }) => {
  const [chat, setChat] = useState<string>('');
  const [chatList, setChatList] = useState<messageType[]>(messages);
  const nickname = useRecoilValue(nicknameState);

  return (
    <ChatRoom>
      <Title />
      <MessageView chatList={chatList} />
      <ChatInputView
        chat={chat}
        setChat={setChat}
        setChatList={setChatList}
        drawer={drawer}
        username={nickname}
      />
    </ChatRoom>
  );
};

export default UsersChat;

const ChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 7px 12px -9px #000000;
  width: 35rem;
  height: 50rem;
  background-color: white;
  border-radius: 10px;
  color: black;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 85%;
    height: 35rem;
  }
`;
