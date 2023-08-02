import { RoundGameType, UserListType } from '@/types/gameInfo';
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

export const userListState = atom<UserListType[]>({
  key: 'userList',
  default: [],
});

export const currentRoundState = atom({
  key: 'currentRound',
  default: 1,
});

export const remainTimeState = atom<number>({
  key: 'remainTime',
  default: 99,
});

export const roundGameState = atom<RoundGameType>({
  key: 'roundGameAtom',
  default: {
    drawer: '',
    round: 0,
    word: '',
    word_id: '',
  },
});

export const runStopTimerState = atom<boolean>({
  key: 'runStop',
  default: true,
});

export const waveTextState = atom<string>({
  key: 'waveText',
  default: '',
});
