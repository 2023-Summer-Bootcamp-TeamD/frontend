import { messageType } from '@/types/chatRoom';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';
import sendImg from '@/assets/sendIcon.png';
import { useSocketContext } from '@/context/SocketContext';
type Props = {
  chat: string;
  setChat: React.Dispatch<React.SetStateAction<string>>;
  setChatList: React.Dispatch<React.SetStateAction<messageType[]>>;
};

const ChatInputView = ({ setChat, chat, setChatList }: Props) => {
  const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChat(e.target.value);
  };

  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;

  useEffect(() => {
    if (socket && isConnected) {
      // 서버로부터 메시지를 받았을 때의 처리
      socket.on('updateChat', (data) => {
        setChatList((prevChatList) => [
          ...prevChatList,
          {
            nickname: data.nickname,
            message: data.message,
            date: dayjs().format('HH:mm'),
          },
        ]);
      });
    }
    return () => {
      if (socket && isConnected) {
        socket.off('updateChat');
      }
    };
  }, [socket, isConnected]);

  //텍스트창에서 엔터를 눌렀을때 실행되는 함수
  const sendMessageToEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.currentTarget.value.length !== 0 &&
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      sendSumit();
    }
  };

  //전송 버튼을 클릭했을때 실행되는 함수
  const sendMessage = () => {
    sendSumit();
    setChat('');
  };

  const sendSumit = () => {
    socket?.emit('sendMessage', chat);
    setChat('');
  };

  return (
    <ChatInputBox>
      <textarea
        onKeyDown={sendMessageToEnter}
        placeholder="내용을 입력해 주세요."
        onChange={textHandler}
        value={chat}
      ></textarea>
      <button onClick={sendMessage}>
        <img src={sendImg} />
      </button>
    </ChatInputBox>
  );
};

export default ChatInputView;

const ChatInputBox = styled.div`
  display: flex;
  height: 5rem;
  background-color: blue;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  & > textarea {
    flex-grow: 1;
    height: 100%;
    resize: none;
    border-bottom-left-radius: 10px;
    border: none;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }

  & > button {
    width: 7rem;
    height: 100%;
    border-bottom-right-radius: 10px;
    border: none;
    background-color: white;
    cursor: pointer;

    & > img:hover {
      scale: 1.1;
    }
  }
`;
