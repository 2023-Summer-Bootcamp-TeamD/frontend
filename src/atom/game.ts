import { atom } from 'recoil';

export const playerMaxCountState = atom({
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

export const categoryIdState = atom({
  key: 'categoryIdState',
  default: 0,
});

export const scoreState = atom({
  key: 'scoreState',
  default: 0,
});

export const timeState = atom({
  key: 'timeState',
  default: 0,
});
