import decodeHash from "./decodeHash";

const checkHash = (originalStr: string, hashed: string, secret?: string): boolean => {
  if (secret) {
    return originalStr === decodeHash(hashed, secret).decoded;
  } else {
    return originalStr === decodeHash(hashed).decoded;
  }
};

export default checkHash;
