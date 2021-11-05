export const getIds = (ids: string[], joiner: string) => {
  return ids.map((value) => `userId=${value}`).join(joiner);
};