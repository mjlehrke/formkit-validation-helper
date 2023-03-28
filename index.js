const generateValidationArray = (obj) => {
  return Object.keys(obj);
}

const generateValidationString = (obj) => {
  return generateValidationArray(obj).join(',');
};

export {generateValidationArray, generateValidationString};
