export const createElement = (index, type) => {
  const elementId = new Date().getTime().toString();

  return ({
    "elementId": elementId,
    "displayName": "",
    "displayOrder": index,
    "type": type,
  });
};
