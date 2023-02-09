module.exports = {
    entryPoints: [
        './source'
    ],
    name: 'lifeware-java-mangler - DEV',
    tsconfig: 'source/tsconfig.json',
    gaID: process.env.GA_TOKEN,
    out: './docs/documentation/html-dev'
};