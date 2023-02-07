import fs from 'node:fs';
import { build } from 'esbuild';
import { generateDtsBundle } from 'dts-bundle-generator';

import packageJson from './package.json' assert { type: 'json' };


async function buildModule() {
    const shared = {
        entryPoints: ['source/index.ts'],
        bundle: true,
        minify: true,
        treeShaking: true,
        external: packageJson.dependencies ?? []
    };

    await build({
        ...shared,
        outfile: 'bundled/commonjs/index.js',
        format: 'cjs'
    });

    await build({
        ...shared,
        outfile: 'bundled/esm/index.esm.js',
        format: 'esm',
    });
}

function buildDts() {
    generateDtsBundle([
        {
            filePath: './source/index.ts',
            output: './bundled/index.d.ts'
        },
    ]);
}

function generateCommonjsPackageJson() {
    const packageJsonCommonJs = JSON.stringify({ ...packageJson, type: undefined }, null, 2);
    fs.writeFileSync('./bundled/commonjs/package.json', packageJsonCommonJs);
}

await buildModule();
buildDts();
generateCommonjsPackageJson();