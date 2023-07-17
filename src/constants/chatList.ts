import { messageType } from '@/types/chatRoom';
import dayjs from 'dayjs';

export const messages: messageType[] = [
  {
    nickname: '나무',
    message: '안녕하세여',
    date: dayjs().format('HH:mm'),
  },
];
