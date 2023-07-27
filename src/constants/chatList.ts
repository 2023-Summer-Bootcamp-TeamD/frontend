import { messageType } from '@/types/chatRoom';
import dayjs from 'dayjs';

export const messages: messageType[] = [
  {
    type: 'message',
    nickname: '운영자',
    message: '안녕하세여',
    date: dayjs().format('HH:mm'),
  },
];
