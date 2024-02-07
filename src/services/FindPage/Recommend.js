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

export const specificRecommendApi = async ({ contentId, contentType }) => {
  return ['temp', 'temp', 'temp'];

  /* eslint-disable-next-line */
  const { data } = await api.get(
    `contents/recommend/special/${contentId}?type=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};

export const getSpecificSituations = async () => {
  /* eslint-disable-next-line */
  return [
    {
      sentence: 'temp',
      commentId: 1,
    },

    {
      sentence: 'temp2jj',
      commentId: 2,
    },

    {
      sentence: 'tem3jp',
      commentId: 3,
    },

    {
      sentence: 'temp4',
      commentId: 4,
    },
  ];

  /* eslint-disable-next-line */
  const { data } = await api.get(`comment/make/situation`);
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};
