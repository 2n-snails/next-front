// 날짜 계산
export const DateFormat = (oldDate: any): string => {
  const receiveDate = oldDate.toString();

  const year = receiveDate.split("-")[0];
  const month = receiveDate.split("-")[1];
  const day = receiveDate.split("-")[2];

  const postDate = new Date(year, month, day);
  const presentDate = new Date();

  const postRealDate = presentDate.getTime() - postDate.getTime();

  const dayResult = 1000 * 60 * 60 * 24;
  const monthResult = dayResult * 30;
  const yearResult = monthResult * 12;

  // 일수차이
  const finalDay = Math.ceil(postRealDate / dayResult);
  // 월수차이
  const finalMonth = Math.ceil(postRealDate / monthResult);
  // 년도차이
  const finalYear = Math.ceil(postRealDate / yearResult);

  // 년이 있으면 약 ~ 년으로 출력
  if (finalYear > 0) {
    return `${finalYear}년 전`;
  }
  if (finalMonth > 0) {
    return `${finalMonth}개월 전`;
  }
  return `${finalDay}일 전`;
};
