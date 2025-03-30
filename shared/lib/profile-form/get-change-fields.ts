export const getChangedFields = (
  obj1: Record<string, string> | undefined,
  obj2: Record<string, string> | undefined,
) => {
  if (obj1 && obj2) {
    return Object.keys(obj1).reduce(
      (acc, key) => {
        if (obj1[key] !== obj2[key]) {
          acc[key] = { old: obj1[key], new: obj2[key] };
        }
        return acc;
      },
      {} as Record<string, { old: any; new: any }>,
    );
  }
  return {};
};
