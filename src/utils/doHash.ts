import alphaEncode from "./alphaEncode";
import { secretExtra, strExtra } from "./constants";

const doHash = (str: string, secret: string): string => {
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

export default doHash;
