export type GameRoundInfoType = {
  room_id: string;
  time: number;
  word: string;
  nickname: string;
};

export type UserListType = {
  [key: string]: number;
};

export type RoundGameType = {
  drawer: string;
  round: number;
  word: string;
};
