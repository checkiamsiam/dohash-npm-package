import indexExchange from "../utils/IndexExchange";
import alphaDecode from "../utils/alphaDecode";
import alphaEncode from "../utils/alphaEncode";
import { checkValid, secretExist } from "../utils/constants";

const decodeHash = (hashed: string, secret?: string): { decoded: string | null; error: string | null } => {
  const idxExHashed: string = indexExchange(hashed);
  const arrangedHashed: string =
    idxExHashed.length % 2 === 0
      ? idxExHashed.slice(Math.floor(idxExHashed.length / 2)) + idxExHashed.slice(0, Math.floor(idxExHashed.length / 2))
      : idxExHashed.slice(Math.floor(idxExHashed.length / 2) + 1) + idxExHashed.slice(0, Math.floor(idxExHashed.length / 2) + 1);

  if (!arrangedHashed.includes(indexExchange(alphaEncode(secretExist)))) {
    const easyDecodedBase: string = indexExchange(alphaDecode(hashed));
    return easyDecodedBase.includes(checkValid)
      ? { decoded: easyDecodedBase.replace(checkValid, ""), error: null }
      : { decoded: null, error: "Invalid hash" };
  } else {
    if (!secret) {
      return { decoded: null, error: "UnAuthorized" };
    }
    const extract: string =
      secret.length % 2 === 0
        ? arrangedHashed.substring(Math.floor(secret.length / 2), arrangedHashed.length - Math.floor(secret.length / 2))
        : arrangedHashed.substring(Math.floor(secret.length / 2), arrangedHashed.length - Math.floor(secret.length / 2) - 1);

    if (!extract.includes(indexExchange(alphaEncode(secretExist)))) {
      return { decoded: null, error: "UnAuthorized" };
    }

    const extractSecret: string = arrangedHashed.replace(extract, "");
    const decodeSecret: string = indexExchange(alphaDecode(extractSecret));

    if (decodeSecret.localeCompare(secret) !== 0) {
      return { decoded: null, error: "UnAuthorized" };
    }

    const decodeBase: string = extract.replace(indexExchange(alphaEncode(secretExist)), "");
    const decodeBaseWithValidation: string = indexExchange(alphaDecode(decodeBase));

    return decodeBaseWithValidation.includes(checkValid)
      ? { decoded: decodeBaseWithValidation.replace(checkValid, ""), error: null }
      : { decoded: null, error: "Invalid hash" };
  }
};

export default decodeHash;
