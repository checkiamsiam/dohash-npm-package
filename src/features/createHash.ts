import indexExchange from "../utils/IndexExchange";
import alphaEncode from "../utils/alphaEncode";
import { checkValid, secretExist } from "../utils/constants";

const createHash = (str: string, secret?: string): string => {
  const randomIOfStr: number = Math.floor(Math.random() * str.length);
  const strBaseEnc: string = str.slice(0, randomIOfStr) + checkValid + str.slice(randomIOfStr);
  const strEnc: string = indexExchange(alphaEncode(strBaseEnc));
  if (!secret) {
    return strEnc;
  } else {
    const secEnc: string = indexExchange(alphaEncode(secret));
    const secretExistEncode: string = indexExchange(alphaEncode(secretExist));
    const randomIndex: number = Math.floor(Math.random() * strEnc.length);
    const secretCodeIncludedStr: string = strEnc.slice(0, randomIndex) + secretExistEncode + strEnc.slice(randomIndex);
    const baseStrRes: string = secEnc.slice(0, Math.floor(secEnc.length / 2)) + secretCodeIncludedStr + secEnc.slice(Math.floor(secEnc.length / 2));
    const baseStrRes2: string = baseStrRes.slice(Math.floor(baseStrRes.length / 2)) + baseStrRes.slice(0, Math.floor(baseStrRes.length / 2));
    const finalStrRes: string = indexExchange(baseStrRes2);
    return finalStrRes;
  }
};

export default createHash;
