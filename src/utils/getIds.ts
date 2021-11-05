export const getIds = (ids: string[], joiner: string) =>
  ids.map((value) => `userId=${value}`).join(joiner);
