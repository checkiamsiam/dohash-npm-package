const encodeAlpha = (str) => {
  const reverse = str.split("").reverse().join("");
  const replaceStr = reverse.replace(/[a-zA-Z0-9\s]/g, (match) => {
    switch (match) {
      case "a":
        return "b";
      case "b":
        return "c";
      case "c":
        return "d";
      case "d":
        return "e";
      case "e":
        return "f";
      case "f":
        return "g";
      case "g":
        return "h";
      case "h":
        return "i";
      case "i":
        return "j";
      case "j":
        return "k";
      case "k":
        return "l";
      case "l":
        return "m";
      case "m":
        return "n";
      case "n":
        return "o";
      case "o":
        return "p";
      case "p":
        return "q";
      case "q":
        return "r";
      case "r":
        return "s";
      case "s":
        return "t";
      case "t":
        return "u";
      case "u":
        return "v";
      case "v":
        return "w";
      case "w":
        return "x";
      case "x":
        return "y";
      case "y":
        return "z";
      case "z":
        return "a";
      case "A":
        return "B";
      case "B":
        return "C";
      case "C":
        return "D";
      case "D":
        return "E";
      case "E":
        return "F";
      case "F":
        return "G";
      case "G":
        return "H";
      case "H":
        return "I";
      case "I":
        return "J";
      case "J":
        return "K";
      case "K":
        return "L";
      case "L":
        return "M";
      case "M":
        return "N";
      case "N":
        return "O";
      case "O":
        return "P";
      case "P":
        return "Q";
      case "Q":
        return "R";
      case "R":
        return "S";
      case "S":
        return "T";
      case "T":
        return "U";
      case "U":
        return "V";
      case "V":
        return "W";
      case "W":
        return "X";
      case "X":
        return "Y";
      case "Y":
        return "Z";
      case "Z":
        return "A";
      case "0":
        return "1";
      case "1":
        return "2";
      case "2":
        return "3";
      case "3":
        return "4";
      case "4":
        return "5";
      case "5":
        return "6";
      case "6":
        return "7";
      case "7":
        return "8";
      case "8":
        return "9";
      case "9":
        return "0";
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      case 4:
        return 5;
      case 5:
        return 6;
      case 6:
        return 7;
      case 7:
        return 8;
      case 8:
        return 9;
      case 9:
        return 0;

      case " ":
        return "$";
      default:
        return match;
    }
  });
  const reverseRes = replaceStr.split("").reverse().join("");
  return reverseRes;
};

const decodeAlpha = (str) => {
  const reverse = str.split("").reverse().join("");
  const revRes = reverse.replace(/[a-zA-Z0-9]/g, (match) => {
    switch (match) {
      case "a":
        return "z";
      case "b":
        return "a";
      case "c":
        return "b";
      case "d":
        return "c";
      case "e":
        return "d";
      case "f":
        return "e";
      case "g":
        return "f";
      case "h":
        return "g";
      case "i":
        return "h";
      case "j":
        return "i";
      case "k":
        return "j";
      case "l":
        return "k";
      case "m":
        return "l";
      case "n":
        return "m";
      case "o":
        return "n";
      case "p":
        return "o";
      case "q":
        return "p";
      case "r":
        return "q";
      case "s":
        return "r";
      case "t":
        return "s";
      case "u":
        return "t";
      case "v":
        return "u";
      case "w":
        return "v";
      case "x":
        return "w";
      case "y":
        return "x";
      case "z":
        return "y";
      case "A":
        return "Z";
      case "B":
        return "A";
      case "C":
        return "B";
      case "D":
        return "C";
      case "E":
        return "D";
      case "F":
        return "E";
      case "G":
        return "F";
      case "H":
        return "G";
      case "I":
        return "H";
      case "J":
        return "I";
      case "K":
        return "J";
      case "L":
        return "K";
      case "M":
        return "L";
      case "N":
        return "M";
      case "O":
        return "N";
      case "P":
        return "O";
      case "Q":
        return "P";
      case "R":
        return "Q";
      case "S":
        return "R";
      case "T":
        return "S";
      case "U":
        return "T";
      case "V":
        return "U";
      case "W":
        return "V";
      case "X":
        return "W";
      case "Y":
        return "X";
      case "Z":
        return "Y";
      case "0":
        return "9";
      case "1":
        return "0";
      case "2":
        return "1";
      case "3":
        return "2";
      case "4":
        return "3";
      case "5":
        return "4";
      case "6":
        return "5";
      case "7":
        return "6";
      case "8":
        return "7";
      case "9":
        return "8";
      case 0:
        return 9;
      case 1:
        return 0;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 3;
      case 5:
        return 4;
      case 6:
        return 5;
      case 7:
        return 6;
      case 8:
        return 7;
      case 9:
        return 8;
      case "$":
        return " ";
      default:
        return match;
    }
  });
  const res = revRes.split("").reverse().join("");
  const decoded = res.replace(/[$]/g, " ");
  return decoded;
};
const secretExtra = "sEcreTExtrACHeck";
const strExtra = "paSSwOrdExtRAChECk";

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
