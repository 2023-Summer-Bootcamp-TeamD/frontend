import { restFetcher } from '@/queryClient';

export const gameResultAPI = async (uuid: string) => {
  try {
    const response = await restFetcher({
      method: 'GET',
      path: `/results/${uuid}`,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
