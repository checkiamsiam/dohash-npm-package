import alphaDecode from "./utils/alphaDecode";
import alphaEncode from "./utils/alphaEncode";
import { secretExtra, strExtra } from "./utils/constants";

const createHash = (str: string, secret: string): string => {
  const srtEnc: string = alphaEncode(str);

  if (srtEnc.length <= secret.length) {
    let strRes = "";
    for (let i = 0; i < srtEnc.length; i++) {
      strRes += secret[i] + srtEnc[i];
    }
    strRes = strRes + secretExtra;
    for (let j = srtEnc.length + 1; j < secret.length; j++) {
      strRes += secret[j];
    }
    return alphaEncode(strRes);
  } else {
    let strRes = "";
    for (let i = 0; i < secret.length; i++) {
      strRes += secret[i] + srtEnc[i];
    }
    strRes = strRes + strExtra;
    for (let j = secret.length + 1; j < srtEnc.length; j++) {
      strRes += srtEnc[j];
    }
    return alphaEncode(strRes);
  }
};

const decodeHash = (hashed: string): string => {
  const strDec: string = alphaDecode(hashed);

  if (strDec.includes(secretExtra)) {
    const split = strDec.split(secretExtra);
    const strRes = split[0];
    let orgRes = "";
    for (let i = 0; i < strRes.length; i++) {
      if (i % 2 !== 0) {
        orgRes += strRes[i];
      }
    }
    return alphaDecode(orgRes);
  } else {
    const strRes = strDec.replace(strExtra, "");
    let orgRes = "";
    for (let i = 0; i < strRes.length; i++) {
      if (i % 2 !== 0) {
        orgRes += strRes[i];
      }
    }
    return alphaDecode(orgRes);
  }
};

const checkHash = (originalStr: string, hashed: string): boolean => {
  return originalStr === decodeHash(hashed);
};

const doHash = { createHash, decodeHash, checkHash };

export { createHash, decodeHash, checkHash };

export default doHash;
