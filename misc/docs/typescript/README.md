# Notes From The TS docs

This readme, and its enclosing namespace would be housing all the notes which I would be taking while perusing the official typescript documentation and I forray into deeply understanding the language.

## Installing the Typescript Compiler

To install typescript compiler:

```sh
yarn global add typescript
```

## Using the Compiler

To make use of the ts compiler to transform a `ts` file to JS:

```sh
tsc filename.ts
```

To transform and `watch` for changes so that recompilation and happen on the fly:

```sh
tsc filename.ts --watch
```
