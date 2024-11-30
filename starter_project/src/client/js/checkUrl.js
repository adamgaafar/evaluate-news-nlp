const validUrl = require('valid-url');

function checkUrl(inputText) {
  const isValid = Boolean(validUrl.isWebUri(`${inputText}`));
  //console.log(isValid);
  return isValid;
}

export { checkUrl };
