import { MakeRoomType } from '@/types/creatingSpecificRooms';
import { restFetcher } from '@/queryClient';

export const makeRoomAPI = async ({
  nickname,
  category_id,
  seconds,
  personnel,
}: MakeRoomType) => {
  try {
    const response = await restFetcher({
      method: 'POST',
      path: '/rooms',
      body: {
        nickname: nickname,
        category_id: category_id,
        time: seconds,
        player_num: personnel,
      },
    });

    const gameInfo = {
      nickname,
      category_id,
      time: seconds,
      player_num: personnel,
      entry_code: response.uuid,
      score: 0,
    };

    return gameInfo;
  } catch (e) {
    console.error(e);
  }
};
