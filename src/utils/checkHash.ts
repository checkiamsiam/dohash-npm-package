import decodeHash from "./decodeHash";

const checkHash = (originalStr: string, hashed: string): boolean => {
  return originalStr === decodeHash(hashed);
};

export default checkHash;
