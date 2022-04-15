const spaceValidationRgx = /^ *$/;

export const stringValidation = (e) => {
  if (
    e.key.toLocaleLowerCase() === "enter" &&
    e.target.value?.length > 0 &&
    !spaceValidationRgx.test(e.target.value)
  ) {
    return true;
  }
  return false;
};

export const spaceValidation = (text) => {
  return !spaceValidationRgx.test(text);
};
