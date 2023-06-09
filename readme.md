# dohash

dohash is a lightweight npm package that provides a simple way to hash and encode strings for basic data obfuscation. It is not designed for secure hashing or encryption purposes, but rather for adding a layer of string transformation that can be useful when storing data locally or in cookies.

# **Caution**:

There you can hash something with out adding any secret. but it is not recommended becuase anyone can decode it. so if you want to hash something and decode it later you should add a secret key. and when you decode it you should add the same secret key. if you don't add the same secret key you will get an error.

# Installation

To install the dohash package, use npm:

```javascript
npm install dohash
```

or

```javascript
npm install @checkiamsiam/dohash
```

# Usage

Import the functions from the package into your project:

```javascript
const { createHash, decodeHash, checkHash } = require("dohash");
```

or

```javascript
const doHash = require("dohash");
doHash.createHash();
doHash.decodeHash();
doHash.checkHash();
```

### `createHash(str, secret)` Hashes and encodes a given string using a secret key.

Parameters:

- `str`: The string to be hashed.
- `secret`(optional): The secret key used for hashing. this will make string more secure.
- `Returns`: The hashed and encoded string. (string)

### `decodeHash(hashed , secret)` Decodes a previously hashed and encoded string.

Parameters:

- `hashed`: The hashed string to be decoded.
  Returns: The decoded string.
- `secret`(optional): This will need when you create hash with secret key.
- `Returns`: error and decoded string. ({decoded : string | null , error : string | null})

### `checkHash(originalStr, hashed , secret)` Checks if a given original string matches a hashed and encoded string.

Parameters:

- `originalStr`: The original string to be checked.
- `hashed`: The hashed and encoded string to be compared.
- `secret`(optional): This will need when you create hash with secret key.
- `Returns`: true if the original string matches the hashed string, false otherwise. (boolean)

# Examples

Here are some examples to demonstrate the usage of dohash:

```javascript
const { createHash, decodeHash, checkHash } = require("dohash");

const originalString = "Hello, world!";
const secretKey = "mySecretKey";

const hashedString = createHash(originalString, secretKey);
console.log("Hashed string:", hashedString);

const { decoded, error } = decodeHash(hashedString, secretKey);
console.log("Decoded string:", decoded);

const isMatch = checkHash(originalString, hashedString, secretKey);
console.log("Match:", isMatch);
```

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

# License

This project is licensed under the ISC License.
