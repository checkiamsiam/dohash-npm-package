import alphaDecode from "./alphaDecode";
import { secretExtra, strExtra } from "./constants";

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

export default decodeHash;
