export const generateValidationString = (obj) => {
  return Object.keys(obj)
    .map((key) => key)
    .join(',');
};

export const generateValidationArray = (obj) => {
  return Object.keys(obj)
    .map((key) => ([key]));
}
