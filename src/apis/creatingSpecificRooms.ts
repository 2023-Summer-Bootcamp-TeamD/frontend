import { MakeRoomType } from '@/types/creatingSpecificRooms';
import { restFetcher } from '@/queryClient';

export const makeRoomAPI = async ({
  nickname,
  selectedCategory,
  seconds,
  personnel,
}: MakeRoomType) => {
  try {
    const response = await restFetcher({
      method: 'POST',
      path: '/rooms',
      body: {
        nickname: nickname,
        category_id: selectedCategory,
        time: seconds,
        player_num: personnel,
      },
    });

    const gameInfo = {
      nickname,
      selectedCategory,
      time: seconds,
      player_num: personnel,
      entry_code: response.uuid,
    };

    return gameInfo;
  } catch (e) {
    console.error(e);
  }
};
