export const copyAndPaste = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('입장코드가 복사되었습니다 !');
  } catch (e) {
    console.error('텍스트 복사 중 오류가 발생했습니다:');
  }
};
