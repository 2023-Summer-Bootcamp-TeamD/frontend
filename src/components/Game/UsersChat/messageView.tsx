import { messageType } from '@/types/chatRoom';
import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import { useRecoilValue } from 'recoil';
import { nicknameState } from '@/atom/game';
import UserNotice from './UserNotice';

type Props = {
  chatList: messageType[];
};
const MessageView = ({ chatList }: Props) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const nickname = useRecoilValue(nicknameState);

  const scrollToBottom = () => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  return (
    <MessageBox ref={chatBoxRef}>
      {chatList.map((chat, index) => {
        if (chat.type === 'INFO') {
          return <UserNotice key={index} message={chat.message} />;
        } else if (chat.nickname === nickname) {
          return (
            <MyMessage key={index} date={chat.date} message={chat.message} />
          );
        } else {
          let flag = 0;
          if (
            index !== 0 &&
            chatList[index - 1].nickname === chatList[index].nickname
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
