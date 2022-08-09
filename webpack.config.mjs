import { fileURLToPath } from 'node:url';
import path from 'node:path';

import nodeExternals from 'webpack-node-externals';
import BundleDeclarationsWebpackPlugin from 'bundle-declarations-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ResolveTypescriptPlugin from 'resolve-typescript-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    target: 'node',
    mode: 'production',
    devtool: 'source-map',
    experiments: {
        outputModule: true
    },
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        fullySpecified: true,
        extensions: ['.ts', '.js'],
        extensionAlias: {
            '.js': ['.ts', '.js'],
            '.mjs': ['.mts', '.mjs']
        },
        plugins: [new TsconfigPathsPlugin({
            configFile: './source/tsconfig.json',
            extensions: ['.ts', '.js'],
            logLevel: 'info'
        }), new ResolveTypescriptPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: path.resolve(__dirname, 'source'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleDeclarationsWebpackPlugin({
            entry: "./source/index.ts",
            outFile: "./index.d.ts"
        })
    ],
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, './bundled'),
        filename: 'index.js',
        chunkFormat: 'module'
    }
}