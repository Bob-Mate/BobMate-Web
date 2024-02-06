import api from '..';
/**
{
  "isSuccess": true,
  "code": "COMMON200",
  "message": "성공입니다.",
  "result": [{...}, {...}]
}
*/
export const normalRecommendApi = async ({
  emotion,
  withWhom,
  contentType,
}) => {
  return ['temp', 'temp', 'temp'];

  /* eslint-disable-next-line */
  const { data } = await api.get(
    `contents/recommend/daily?emotion=${emotion}&withWhom=${withWhom}&contentType=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};