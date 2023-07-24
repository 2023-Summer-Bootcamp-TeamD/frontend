import React, { useState } from 'react';
import { styled } from 'styled-components';
import Title from './title';
import MessageView from './messageView';
import ChatInputView from './chatInputView';
import { messageType } from '@/types/chatRoom';
import { messages } from '@/constants/chatList';

type UserChatProps = {
  nickname: string;
  uuid: string;
  UUID: string;
};

const UsersChat = ({ nickname, UUID }: UserChatProps) => {
  const [chat, setChat] = useState<string>('');
  const [chatList, setChatList] = useState<messageType[]>(messages);

  return (
    <ChatRoom>
      <Title UUID={UUID} />
      <MessageView chatList={chatList} nickname={nickname} />
      <ChatInputView
        nickname={nickname}
        chat={chat}
        setChat={setChat}
        setChatList={setChatList}
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
`;
