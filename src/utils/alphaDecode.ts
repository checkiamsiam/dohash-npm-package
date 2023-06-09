const alphaDecode = (str: string): string => {
  const reverse: string = str.split("").reverse().join("");
  const revRes: string = reverse.replace(/[a-zA-Z0-9]/g, (match: string) => {
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
      case "и":
        return " ";
      default:
        return match;
    }
  });
  const res: string = revRes.split("").reverse().join("");
  const decoded: string = res.replace(/[и]/g, " ");
  return decoded;
};

export default alphaDecode;
