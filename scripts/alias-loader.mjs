import loadAliases from './esm-module-alias.mjs';

export const resolve = loadAliases({
  "@": "./dist/source",
  "@src": "./dist/source",
  "@test": "./dist/test"
});