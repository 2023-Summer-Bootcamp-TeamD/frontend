import { restFetcher } from '@/queryClient';

export const entryAPI = async (uuid: string) => {
  try {
    const response = await restFetcher({
      method: 'POST',
      path: `/rooms/users/${uuid}`,
    });
    return response;
  } catch (e) {
    alert('연동 에러');
  }
};
