import { fileURLToPath } from 'node:url';
import path from 'node:path';

import nodeExternals from 'webpack-node-externals';
import BundleDeclarationsWebpackPlugin from 'bundle-declarations-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    target: 'node',
    mode: 'production',
    // devtool: 'source-map',
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({
            configFile: './source/tsconfig.json',
            extensions: ['.ts', '.js']
        })]
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
        library: 'euberlog',
        libraryTarget: 'module',
        globalObject: 'this',
        umdNamedDefine: true,
    },
    experiments: {
        outputModule: true
    
}