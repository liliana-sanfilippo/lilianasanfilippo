# Bibtex Author parser

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen) [![publish to github](https://github.com/liliana-sanfilippo/author-name-parser/actions/workflows/publish.yml/badge.svg)](https://github.com/liliana-sanfilippo/author-name-parser/actions/workflows/publish.yml) [![publish to npm](https://github.com/liliana-sanfilippo/author-name-parser/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/liliana-sanfilippo/author-name-parser/actions/workflows/publish-npm.yml)

Name parser for parsing author lists of bibtex references to allow for consistent styl. Includes the ANTLRts grammar. 

Planning can be seen in the [Wiki](https://github.com/liliana-sanfilippo/author-name-parser/wiki). The wiki also contains a [troubleshooting guide](https://github.com/liliana-sanfilippo/author-name-parser/wiki/Troubleshooting) that will be expanded as errors and problems occur. 

## Features

### Grammar

- [x] Both formats `last, first` and `first last`
- [X] Written-out names `Liliana` as well as initials with and without dot `L` / `L.` and names and initials connected with dashes 
- [X] Up to three first names
- [X] Regocnition of names with letter-apostroph beginning as last names e.g. `O'hara`
- [X] Selection of (nobility) particles e.g. `van` / `das`
- [X] Multiple unicode dashes and apostrophes and special unicode characters
- [X] Recognition of selection of arabian first name particles e.g. `ibn`
- [X] Works with multiple list seperators `,` / `;` / `and` ...

### Technical

- [x] Browser support
- [x] NPM support
- [x] TypeScript Support (Typing support for TypeScript projects incl. exportable "Name" Type for TypeScript projects)

### Further info

- NOT case sensitive!

## Installation

### NPM / YARN

```bash
npm install @liliana-sanfilippo/author-name-parser
```

```bash
yarn add @liliana-sanfilippo/author-name-parser
```

### In-Browser Use

Include `author-name-parser.js` from [CDN](https://unpkg.com/@liliana-sanfilippo/author-name-parser/dist/umd/author-name-parser.js)

## Build

### For Dev

Build a CommonJS script to `dist/dev/author-name-parser-dev.js` with source map.

```shell
npm run dev
```

Configuration is changeable in `.webpack.config.dev.js`.

### For Test

Run tests defined in `test` after building for dev.

```shell
npm run test
```

### For Production

Build a UMD script to `dist/umd/author-name-parser.js` and a CommonJS script to `dist/cjs/author-name-parser.js` and a module to `dist/module/author-name-parser.js`.

```shell
npm run build
```

## USAGE 

### ESM

```javascript 
import { extractAllNames } from '@liliana-sanfilippo/author-name-parser';
```

### CommonJS

```javascript
const { extractAllNames } = require('@liliana-sanfilippo/author-name-parser');
```

### Browser (UMD)
```html
<script src="dist/umd/author-name-parser.js"></script>
<script>
  const names = AuthorNameParser.extractAllNames("Max Mustermann");
</script>
```


## Related Projects

- [react-bibtex-source-generator](https://github.com/liliana-sanfilippo/react-bibtex-source-generator)
- [bibtex-ts-parser](https://github.com/liliana-sanfilippo/bibtex-ts-parser)
