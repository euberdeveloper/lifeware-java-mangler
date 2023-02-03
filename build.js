import { build } from 'esbuild';
import npmDts from 'npm-dts';

import packageJson from './package.json' assert { type: 'json' };

new npmDts.Generator({
    entry: 'source/index.ts',
    output: 'bundled/index.d.ts'

}).generate();

const shared = {
    entryPoints: ['source/index.ts'],
    bundle: true,
    minify: true,
    treeShaking: true,
    external: packageJson.dependencies ?? []
};

build({
    ...shared,
    outfile: 'bundled/index.js',
    format: 'cjs'
});

build({
    ...shared,
    outfile: 'bundled/index.esm.js',
    format: 'esm',
});