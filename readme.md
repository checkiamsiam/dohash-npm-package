# dohash

dohash is a lightweight npm package that provides a simple way to hash and encode strings for basic data obfuscation. It is not designed for secure hashing or encryption purposes, but rather for adding a layer of string transformation that can be useful when storing data locally or in cookies.

# **Caution**:

<span style="color: yellow;">This package should not be used for hashing sensitive or critical information. It is meant for basic obfuscation and should not be relied upon for strong security requirements.</span>

## Installation

To install the dohash package, use npm:

```javascript
npm install dohash
```
or

```javascript
npm install @checkiamsiam/dohash
```

## Usage

Import the functions from the package into your project:

```javascript
const { doHash, decode, check } = require("dohash");
```

### `doHash(str, secret)` Hashes and encodes a given string using a secret key.

Parameters:

- `str`: The string to be hashed.
- `secret`: The secret key used for hashing.
- `Returns`: The hashed and encoded string.

### `decode(hashed)` Decodes a previously hashed and encoded string.

Parameters:

- `hashed`: The hashed string to be decoded.
  Returns: The decoded string.

### `check(originalStr, hashed)` Checks if a given original string matches a hashed and encoded string.

Parameters:

originalStr: The original string to be checked.
hashed: The hashed and encoded string to be compared.
Returns: true if the original string matches the hashed string, false otherwise.

Examples
Here are some examples to demonstrate the usage of dohash:

```javascript
const { doHash, decode, check } = require("dohash");

const originalString = "Hello, world!";
const secretKey = "mySecretKey";

const hashedString = doHash(originalString, secretKey);
console.log("Hashed string:", hashedString);

const decodedString = decode(hashedString);
console.log("Decoded string:", decodedString);

const isMatch = check(originalString, hashedString);
console.log("Match:", isMatch);
```

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

# License

This project is licensed under the ISC License.
