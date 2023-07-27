import { GameRoundInfoType, UserListType } from '@/types/gameInfo';
import { atom } from 'recoil';

export const playerMaxCountState = atom<number>({
  key: 'playerMaxCount',
  default: 0,
});
export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
});

export const uuidState = atom<string>({
  key: 'uuidState',
  default: '',
});

export const playerNumState = atom<number>({
  key: 'playerNumState',
  default: 0,
});

export const categoryIdState = atom<number>({
  key: 'categoryIdState',
  default: 0,
});

export const scoreState = atom<number>({
  key: 'scoreState',
  default: 0,
});

export const timeState = atom<number>({
  key: 'timeState',
  default: 0,
});

export const startState = atom<boolean>({
  key: 'start',
  default: false,
});

export const userListState = atom<UserListType[]>({
  key: 'userList',
  default: [],
});

export const gameRoundInfo = atom<GameRoundInfoType>({
  key: 'roundInfo',
  default: {
    room_id: '1',
    time: 60,
    word: '케이크',
    nickname: 'hello',
  },
});
