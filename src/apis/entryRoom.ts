import { restFetcher } from '@/queryClient';
import { NickNameType } from '@/types/entryRoom';
export const entryAPI = async (uuid: string, nickNameData: NickNameType) => {
  try {
    const response = await restFetcher({
      method: 'POST',
      path: `/rooms/users/${uuid}`,
      body: nickNameData,
    });

    return response;
  } catch (e) {
    alert('연동 에러');
  }
};
