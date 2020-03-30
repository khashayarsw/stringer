# @khashi/stringer

[![npm](https://img.shields.io/npm/v/@khashi/stringer)](https://www.npmjs.com/package/@khashi/stringer)
[![NPM](https://img.shields.io/npm/l/@khashi/stringer?color=blue)](https://www.npmjs.com/package/@khashi/stringer)


Convert your string

## Install

```
$ npm install @khashi/stringer
```

## Usage

```js
const stringer = require("@khashi/stringer");

stringer.isUpperCase("DEVELOPER");
//=> "true"

stringer.toLowerCase(123);
//=> Uncaught TypeError: stringer wants a string!
```
## API
Here is a list of currently available stringers.

Stringer | Description
------------ | -------------
toUpperCase(str) | convert string to uppercase letters
toLowerCase(str) | convert string to lowercase letters
isUpperCase(str) | checks if all letters are uppercase
isLowerCase(str) | checks if all letters are lowercase


## License

@khashi/stringer is released under the terms of the MIT License.