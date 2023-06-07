const indexExchange = (str: string): string => {
  if (str.length % 2 === 0) {
    let strRes: string = "";
    for (let i = 0; i < str.length; i = i + 2) {
      strRes += str[i + 1] + str[i];
    }
    return strRes;
  } else {
    let strRes: string = "";
    for (let i = 0; i < str.length - 1; i = i + 2) {
      strRes += str[i + 1] + str[i];
    }
    strRes += str[str.length - 1];
    return strRes;
  }
};

export default indexExchange;
