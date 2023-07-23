import { messageType } from '@/types/chatRoom';
import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import useSocket from '@/hooks/useSocket';

type Props = {
  chatList: messageType[];
};
const MessageView = ({ chatList }: Props) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <MessageBox ref={chatBoxRef}>
      {chatList.map((chat, index) => {
        if (chat.nickname === '나무') {
          return (
            <MyMessage key={index} message={chat.message} date={chat.date} />
          );
        } else {
          let flag = 0;
          //전과 같은 사람이 채팅을 쳤다면
          if (
            chatList[index - 1]?.nickname === chatList[index].nickname &&
            index !== 0
          ) {
            flag = 1;
          }
          return (
            <OtherMessage
              flag={flag}
              key={index}
              nickname={chat.nickname}
              message={chat.message}
              date={chat.date}
            />
          );
        }
      })}
    </MessageBox>
  );
};

export default MessageView;

const MessageBox = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
