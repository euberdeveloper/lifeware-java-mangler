import { build } from 'esbuild';
import { generateDtsBundle } from 'dts-bundle-generator';

import packageJson from './package.json' assert { type: 'json' };

generateDtsBundle([
    {
        filePath: './source/index.ts',
        output: './bundled/index.d.ts'
    },
    
]);

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