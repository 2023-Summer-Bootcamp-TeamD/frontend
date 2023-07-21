import { MakeRoomType } from '@/types/creatingSpecificRooms';
import { customAxios } from './axiosCustom';

export const makeRoomAPI = async ({
  nickname,
  selectedCategory,
  seconds,
  personnel,
}: MakeRoomType) => {
  try {
    const response = await customAxios.post('/rooms', {
      nickname: nickname,
      category_id: selectedCategory,
      time: seconds,
      player_num: personnel,
    });
    const gameInfo = {
      nickname,
      time: seconds,
      player_num: personnel,
      entry_code: response.data.uuid,
    };
    return gameInfo;
  } catch (e) {
    console.error(e);
  }
};
