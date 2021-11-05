export const getIds = (ids: string[]) => {
  return ids.map((_, index) => `userId=${index + 1}`).join("&");
};
