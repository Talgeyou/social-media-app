export const updateObjectinArray = (
  items: Array<any>,
  itemId: number,
  objPropName: string,
  newObjProps: any
) => {
  return items.map((u: any) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
