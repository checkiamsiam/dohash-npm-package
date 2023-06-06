const { encodeAlpha, decodeAlpha } = require("./alfaReplace");
const { secretExtra, strExtra } = require("./constants");

const doHash = (str, secret) => {
  const srtEnc = encodeAlpha(str);
  if (srtEnc.length <= srtEnc.length) {
    let strRes = "";
    for (let i = 0; i < srtEnc.length; i++) {
      strRes += secret[i] + srtEnc[i];
    }
    strRes = strRes + secretExtra;
    for (let j = srtEnc.length + 1; j < secret.length; j++) {
      strRes += secret[j];
    }
    return encodeAlpha(strRes);
  } else {
    let strRes = "";
    for (let i = 0; i < secret.length; i++) {
      strRes += secret[i] + srtEnc[i];
    }
    strRes = strRes + strExtra;
    for (let j = secret.length + 1; j < srtEnc.length; j++) {
      strRes += srtEnc[j];
    }
    return encodeAlpha(strRes);
  }
};

const decode = (hashed) => {
  const strDec = decodeAlpha(hashed);
  if (strDec.includes(secretExtra)) {
    const split = strDec.split(secretExtra);
    const strRes = split[0];
    let orgRes = "";
    for (let i = 0; i < strRes.length; i++) {
      if (i % 2 !== 0) {
        orgRes += strRes[i];
      }
    }
    return decodeAlpha(orgRes);
  } else {
    const strRes = strDec.replace(strExtra, "");
    let orgRes = "";
    for (let i = 0; i < strRes.length; i++) {
      if (i % 2 !== 0) {
        orgRes += strRes[i];
      }
    }
    return decodeAlpha(orgRes);
  }
};

const check = (originalStr, hashed) => {
  return originalStr === decode(hashed);
};

module.exports = {
  doHash,
  check,
  decode,
};
